import { IPostListItem } from './types'

const dummyData: IPostListItem[] = [
  {
    id: 1,
    imgUrl: '/assets/img/sunmu-01.jpeg',
    content: '안녕하세요. 글1',
  },
  {
    id: 2,
    imgUrl: '/assets/img/sunmu-02.jpeg',
    content: '안녕하세요. 글2',
  },
  {
    id: 3,
    imgUrl: '/assets/img/sunmu-03.jpeg',
    content: '안녕하세요. 글3',
  },
  {
    id: 4,
    imgUrl: '/assets/img/selfi-cat3.jpg',
    content: '안녕하세요. 글4',
  },
]

export const getPostList = async () => {
  await new Promise((res, rej) => {
    setTimeout(() => {
      res(true)
    }, 1000)
  })

  return dummyData
}
