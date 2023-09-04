'use client'

import { useState } from 'react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from '../ui/Select'

export default function SelectDemo() {
  const [selectVal, setSelectVal] = useState('')

  return (
    <Select onValueChange={setSelectVal}>
      <SelectTrigger hasIcon className='w-[275px]' variant='default'>
        <SelectValue placeholder='Select a position...' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Design/UX</SelectLabel>
          <SelectItem value='Director, UX - Platform'>
            Director, UX - Platform
          </SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Engineering</SelectLabel>
          <SelectItem value='Cloud SRE Senior Director'>
            Cloud SRE Senior Director
          </SelectItem>
          <SelectItem value='Senior Software Engineer'>
            Senior Software Engineer
          </SelectItem>
          <SelectItem value='Senior Manager - Security Architecture'>
            Senior Manager
          </SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Marketing</SelectLabel>
          <SelectItem value='Director, PR & Communications'>
            Director, PR & Communications
          </SelectItem>
          <SelectItem value='Sr. Design Engineer'>
            Sr. Design Engineer
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
