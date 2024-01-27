import FloatNav from "../components/FloatNav";
import SvgComponent from "../components/SvgComponent";

export default function Welcome() {
  return (
    <main className='flex'>
       <nav className='text-[#F0F0F0] flex sticky top-0 w-full justify-center px-7 pt-7'>
        <div className='flex w-full max-w-3xl items-center justify-between rounded-full border border-neutral-600 bg-neutral-800 py-2 pl-3 pr-5 shadow-xl'>
          <a href="" target="_blank" rel="noopener noreferrer" class="underline decoration-2 decoration-neutral-500 hover:opacity-70 block">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 6C12.5 6.27614 12.2761 6.5 12 6.5C11.7239 6.5 11.5 6.27614 11.5 6C11.5 5.72386 11.7239 5.5 12 5.5C12.2761 5.5 12.5 5.72386 12.5 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M18.5 6C18.5 6.27614 18.2761 6.5 18 6.5C17.7239 6.5 17.5 6.27614 17.5 6C17.5 5.72386 17.7239 5.5 18 5.5C18.2761 5.5 18.5 5.72386 18.5 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M18.5 12C18.5 12.2761 18.2761 12.5 18 12.5C17.7239 12.5 17.5 12.2761 17.5 12C17.5 11.7239 17.7239 11.5 18 11.5C18.2761 11.5 18.5 11.7239 18.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M6.5 6C6.5 6.27614 6.27614 6.5 6 6.5C5.72386 6.5 5.5 6.27614 5.5 6C5.5 5.72386 5.72386 5.5 6 5.5C6.27614 5.5 6.5 5.72386 6.5 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M6.5 12C6.5 12.2761 6.27614 12.5 6 12.5C5.72386 12.5 5.5 12.2761 5.5 12C5.5 11.7239 5.72386 11.5 6 11.5C6.27614 11.5 6.5 11.7239 6.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18C11.5 17.7239 11.7239 17.5 12 17.5C12.2761 17.5 12.5 17.7239 12.5 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M18.5 18C18.5 18.2761 18.2761 18.5 18 18.5C17.7239 18.5 17.5 18.2761 17.5 18C17.5 17.7239 17.7239 17.5 18 17.5C18.2761 17.5 18.5 17.7239 18.5 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M6.5 18C6.5 18.2761 6.27614 18.5 6 18.5C5.72386 18.5 5.5 18.2761 5.5 18C5.5 17.7239 5.72386 17.5 6 17.5C6.27614 17.5 6.5 17.7239 6.5 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
          </a>
          <div className='space-x-4'>
            <a href='/about' className='text-[#F0F0F0] hover:text-neutral-400'>About</a>
            <a href='/twitter' className='text-[#F0F0F0] hover:text-neutral-400'>Twitter</a>
          </div>
        </div>
    </nav>
      <div className='absolute bottom-0 text-[#1E1E1E] w-full max-w-screen flex px-10 pb-8'>
        <div className='flex flex-col flex-1 space-y-20'>
          <div className='text-9xl'>
            <h1>
              Make the right <br /><em>trade</em>
            </h1>
            </div>
            <div className='max-w-md w-full text-xl'>
            Kairos Capital is a data-driven hedge fund that uses innovative strategies to make decisions and capitalize on the potential of crypto assets
            </div>
        </div>
        <div className='flex'>
          <div className='text-8xl self-end'>
            <h1>
              at the right <br /><em>time</em>
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
