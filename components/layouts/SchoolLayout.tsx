import SchoolCorner, { ISchoolCornerProps } from "components/SchoolCorner"
import { createContext, PropsWithChildren, useState } from "react"

const defaultSchoolContext: ISchoolCornerProps = {
  squareColor: 'transparent',
  bgColor: {
    start: 'transparent',
    end: 'transparent',
  },
  className: '',
}
export const SchoolContext = createContext({ value: defaultSchoolContext, setValue: (() => null) as Function })

const SchoolLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [schoolContext, setSchoolContext] = useState(defaultSchoolContext)
  
  return (<>
    <SchoolContext.Provider value={{ value: schoolContext, setValue: setSchoolContext }}>
      { children }
    </SchoolContext.Provider>
    <SchoolCorner 
      className='w-1/5'
      bgColor={schoolContext.bgColor}
      squareColor={schoolContext.squareColor} />
  </>)
}

export default SchoolLayout