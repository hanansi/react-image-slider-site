import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import './App.css';

function App() {
  function getImages() {
    const images: Record<string, string> = import.meta.glob("./assets/*", { eager: true, import: "default", query: "?url" });
    const imagePaths = Object.values(images);
    let content = [];

    for (let i = 0; i + 2 <= imagePaths.length; i += 2) {
      content.push(<div className="w-full max-w-72 mx-auto touch-none">
                    <ReactBeforeSliderComponent 
                        firstImage={{imageUrl: imagePaths[i]}} 
                        secondImage={{imageUrl: imagePaths[i + 1]}} />
                    </div>)
    }

    return content;
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Image Comparison</h1>
      <div className="flex flex-col gap-12 items-center my-4 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
        {getImages()}
      </div>
    </>
  );
}


export default App
