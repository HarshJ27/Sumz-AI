import {logo} from '../assets'

const Home = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img className='w-28 object-contain' src={logo} alt='sumz_logo' />
            <button className='black_btn' type='button' onClick={() => window.open('https://github.com/HarshJ27')} >GitHub</button>
        </nav>
        <h1 className='head_text' >
            Summarize Articles With <br className='max-md:hidden' />
            <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc' >
            Simplify your lengthy articles into clear and concise with the help of Summize, an open-source article summarizer. 
        </h2>
    </header>
  )
}

export default Home