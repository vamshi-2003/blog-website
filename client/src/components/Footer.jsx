import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-purple-800'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
                <span className='pl-2 py-1 bg-purple-800 hover:bg-purple-950 border border-white rounded-tl-lg text-white '>MERN</span>
                <span className='pr-2 py-1 bg-white border border-purple-800 hover:border-purple-950 rounded-br-lg text-purple-800 hover:text-purple-950 '>BLOG</span>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            <div>
              <Footer.Title title='About'/>
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://roadmap.sh/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Roadmap
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  MERN BLOG
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/vamshi-2003'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="MERN BLOG"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.instagram.com/_vamshi_2003_/' icon={BsInstagram}/>
            <Footer.Icon href='https://twitter.com/evamshivardhan' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/vamshi-2003' icon={BsGithub}/>
            
          </div>
        </div>
      </div>
    </Footer>
  );
}