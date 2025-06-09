import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Contact form schema
const insertContactRequestSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  serviceType: z.string().min(1),
  vehicleType: z.string().min(1),
  location: z.string().min(1),
  message: z.string().min(1),
});

// Simple in-memory storage for contact requests
class MemStorage {
  private contactRequests: Map<number, any>;
  private currentId: number;

  constructor() {
    this.contactRequests = new Map();
    this.currentId = 1;
  }

  async createContactRequest(insertRequest: any) {
    const request = {
      id: this.currentId++,
      ...insertRequest,
      createdAt: new Date(),
    };
    this.contactRequests.set(request.id, request);
    return request;
  }
}

const storage = new MemStorage();

function createTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'candrdetailing3@gmail.com',
      pass: 'qjqc osza utqq nmjx'
    }
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    console.log('Received request body:', req.body);
    
    const result = insertContactRequestSchema.safeParse(req.body);
    if (!result.success) {
      console.error('Validation failed:', result.error);
      return res.status(400).json({
        message: "Invalid request data",
        errors: result.error.issues,
      });
    }

    // Store contact request first (this should always work)
    const contactRequest = await storage.createContactRequest(result.data);
    console.log('Contact request created:', contactRequest);

    // Try to send email notification (don't fail if this doesn't work)
    try {
      const transporter = createTransporter();
      console.log('Attempting to send email...');
      
      const emailContent = `
New Quote Request from C&R Detailing Website

Customer Information:
Name: ${result.data.firstName} ${result.data.lastName}
Email: ${result.data.email}
Phone: ${result.data.phone}
Service Location: ${result.data.location}

Vehicle Information:
Type: ${result.data.vehicleType}
Service Requested: ${result.data.serviceType}

${result.data.message ? `Additional Message:\n${result.data.message}` : ''}

Please respond to this customer as soon as possible.

This request was submitted on ${new Date().toLocaleString('en-US', { 
  timeZone: 'America/Chicago',
  dateStyle: 'full',
  timeStyle: 'short'
})}
      `.trim();
      
      const emailResult = await transporter.sendMail({
        from: `"C&R Detailing Website" <${process.env.SMTP_USER || 'candrdetailing3@gmail.com'}>`,
        to: 'candrdetailing3@gmail.com',
        subject: `New Quote Request - ${result.data.firstName} ${result.data.lastName}`,
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>'),
      });
      console.log('Email sent successfully:', emailResult.messageId);
    } catch (emailError) {
      console.error('Email sending failed, but request was saved:', emailError);
      // Don't fail the request if email fails - the contact data is still saved
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Quote request submitted successfully',
      id: contactRequest.id
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      success: false,
      message: "Failed to submit quote request. Please try again or call us directly.",
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}