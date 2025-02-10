'use server'

import { City, Property, PropertyCategory } from '@/payload-types'
import { duplicateArray } from '@/utilities'
import axiosInstance from '@/utilities/axiosInstance'

export default async function fetchDocs(): Promise<Property[]> {
  const data = (await axiosInstance.get('/api/properties')).data
  return data?.docs?.slice?.(0, 10)
}
