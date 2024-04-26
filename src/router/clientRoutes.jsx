import Course from '@/pages/course'
import Home from '@/pages/home'
import MainClientLayout from '@/layouts/MainClientLayout'
import Post2 from '@/pages/details/Post2'
import Post1 from '@/pages/details/Post1'
import Post3 from '@/pages/details/Post3'
import Post4 from '@/pages/details/Post4'

const mainClientLayout = (children, isFixedHeader) => <MainClientLayout isFixedHeader={isFixedHeader}>{children}</MainClientLayout>
const clientRoutes = [
  {
    path: '/IAAcademy/courses',
    element: mainClientLayout(<Course />, true)
  },
  {
    path: '/IAAcademy/courses/post1',
    element: mainClientLayout(<Post1 />, true)
  },
  {
    path: '/IAAcademy/courses/post2',
    element: mainClientLayout(<Post2 />, true)
  },
  {
    path: '/IAAcademy/courses/post3',
    element: mainClientLayout(<Post3 />, true)
  },
  {
    path: '/IAAcademy/courses/post4',
    element: mainClientLayout(<Post4 />, true)
  },
  {
    path: '/IAAcademy',
    element: mainClientLayout(<Home />)
  },
]

export default clientRoutes
