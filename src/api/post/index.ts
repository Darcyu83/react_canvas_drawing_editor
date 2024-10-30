const dummyData = [
  {
    id: 1,
    imgUrl: '/assets/img/sunmu-01.jpeg',
  },
  {
    id: 2,
    imgUrl: '/assets/img/sunmu-02.jpeg',
  },
  {
    id: 3,
    imgUrl: '/assets/img/sunmu-03.jpeg',
  },
  {
    id: 4,
    imgUrl: '/assets/img/selfi-cat3.jpg',
  },
]
export const getPostList = async () => {
  await new Promise((res, rej) => {
    setTimeout(() => {
      res(true)
    }, 2000)
  })

  return dummyData
}
