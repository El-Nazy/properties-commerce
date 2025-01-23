import type { CollectionConfig } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { anyone } from '@/access/anyone'
import { Shortlet, ShortletBooking } from '@/payload-types'

export const ShortletBookings: CollectionConfig = {
  slug: 'shortlet-bookings',
  access: {
    create: anyone,
    // update: uploadedByOrSuperAdmin,
    // Change to shortlet uploadedBy or super admin
    update: async ({ req, data }) => {
      console.log('data', data)
      console.log('data shortlet', data?.shortlet)
      return (
        ((data as ShortletBooking)?.shortlet as Shortlet)?.uploadedBy === req.user?.id ||
        req.user?.role === 'Super Admin'
      )
    },
    delete: superAdmin,
  },
  admin: {
    useAsTitle: 'fullName',
    // listSearchableFields: ['fullName', 'email'],
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'shortlet',
      type: 'relationship',
      relationTo: 'shortlets',
      required: true,
      index: true,
    },
    {
      name: 'checkInDay',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'checkOutDay',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'idType',
      type: 'select',
      options: ['NATIONAL ID', 'PASSPORT', 'DRIVERS LICENSE', 'VOTERS CARD'],
      required: true,
    },
    {
      name: 'idDocument',
      type: 'upload',
      relationTo: 'id-documents',
      required: true,
    },
    {
      name: 'paymentConfirmed',
      type: 'checkbox',
      defaultValue: false,
      access: {
        create: superAdmin,
        update: superAdmin,
      },
      admin: {
        description: 'Only the Super Admin can confirm payments to approve the booking',
      },
    },
  ],
}
