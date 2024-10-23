import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border-2 border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl">
      <div className="flex-1 justify-center flex flex-col ">
        <h2 className="text-2xl">Want to learn more about me?</h2>
        <p className="text-gray-500 my-2">Checkout my portfolio website</p>
        <a
          href={import.meta.env.VITE_PORTFOLIO_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button gradientDuoTone="purpleToPink" className="w-full">
            Visit Portfolio
          </Button>
        </a>
      </div>
      <div className="p-7 flex-1">
        <img src="https://cache.careers360.mobi/media/article_images/2022/4/20/How-to-make-portfolio-for-design-admission.webp" />
      </div>
    </div>
  );
}
