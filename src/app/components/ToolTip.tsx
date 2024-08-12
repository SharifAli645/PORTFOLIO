import React, { FC, ReactNode } from 'react'
interface Props{
    children: ReactNode;
    tooltip?: string
}
const ToolTip: FC<Props> = ({children, tooltip}):JSX.Element=> {
  return (
      <div className='group relative inline-block'>
          {children}
          <span className='invisible group-hover:visible opacity-0 group-hover:opacity-100
          transition bg-blue-500 text-white p-1 rounded-lg absolute  bottom-full w-[250px] mt-2'>
              {tooltip}
          </span>
    </div>
  )
}
export default ToolTip;