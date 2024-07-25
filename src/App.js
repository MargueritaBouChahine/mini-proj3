const App = () => {

  return (
    <>
      <div className="bg-customYellow flex flex-col justify-center items-center h-[100%] w-[100%] font-Figtree text-[16px]  py-[150px] px-[50%] xs:px-[20px] sm:px-[120px] md:px-[200px] lg:px-[320px] lg:py-[200px] xl:px-[450px] xxl:px-[550px]">
        <div className="bg-white w-[100%] rounded-2xl p-[20px] border-[1px] border-black shadow-custom-shadow flex flex-col justify-center">
          <img src="./images/illustration-article.svg" className="w-[100%] self-center rounded-xl" />
          <div className="bg-customYellow flex flex-col justify-center items-center rounded-[3px] px-[10px] py-[5px] self-start mt-[20px] mb-[15px]"><h3 className="font-extrabold text-sm">Learning</h3></div>
          <div className="self-start"><p className="text-sm text-gray-950">Published 21 Dec 2023</p></div>
          <div>
            <div className="my-[20px]"><h1 className="font-bold text-2xl">HTML & CSS foundations</h1></div>
            <div><p className="text-gray-500">These languages are the backbone of every website, defining structure, content and presentation.</p></div>
          </div>
          <div className="flex mt-[20px] items-center">
            <img src="./images/image-avatar.webp" className="w-[30px] h-[30px]" />
            <h3 className="mx-[10px] text-xs font-extrabold text-gray-950">Greg Hooper</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;