import type { CollectionConfig } from 'payload'

import { superAdmin } from '@/access/superAdmin'
import { notFromAdminPanel } from '@/access/notFromAdminPanel'

export const TourSchedules: CollectionConfig = {
  slug: 'tour-schedules',
  access: {
    create: notFromAdminPanel,
    update: () => false,
    delete: superAdmin,
  },
  admin: {
    useAsTitle: 'type',
    listSearchableFields: ['type', 'fullName', 'email', 'property'],
  },
  fields: [
    {
      name: 'type',
      label: 'Tour Type',
      type: 'select',
      options: ['In Person', 'Video Chat'],
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'timeOfDay',
      type: 'select',
      options: ['Morning', 'Afternoon', 'Evening'],
      required: true,
    },
    {
      name: 'name',
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
      name: 'message',
      type: 'textarea',
    },
    {
      name: 'property',
      type: 'relationship',
      relationTo: 'properties',
      required: true,
      index: true,
    },
    {
      name: 'agent',
      type: 'relationship',
      relationTo: 'admins',
      required: true,
    },
  ],
}
