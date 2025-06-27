export default function RenderingElement() {
    let message = "Xin chào";
    let user = {
        userName: "Nguyễn Hoàng Duy",
        age: 21
    }
    const news = ()=>{
        return (
            <div>
                <h1>Bài báo 1</h1>
                <p>Nội dung bài báo 1</p>
            </div>
        )

    }
  return (
    <>
        <p>{message}</p>
        <h1>{user.userName}</h1>
         <h2>{user.age}</h2>
         {news()}
    </>
  )
}
