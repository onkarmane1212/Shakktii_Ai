import { useState ,useEffect} from "react";
import styles from "@/styles/Cart.module.css";


function cart() {
      const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  useEffect(() => {
    const boxes = document.querySelectorAll(`.${styles.box}`);

    const checkBoxes = () => {
      const triggerBottom = window.innerHeight * 0.8; // Trigger point

      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          box.classList.add(styles.show);
        } else {
          box.classList.remove(styles.show);
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", checkBoxes);

    // Call on mount to handle boxes already in view
    checkBoxes();

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", checkBoxes);
    };
  }, []);

  
  // Function to open the popup with specific content
  const handleReadMore = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  
  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent('');
  };

  return (
    <>
    <div className="bg-gray-800 min-h-screen">
        <h2 className='font-bold text-white p-10 pb-0 text-3xl   text-center'>DIGITAL MARKETING</h2>
  <div class="max-w-screen-xl mx-auto  pt-16 pb-4">
    <div class="flex flex-col justify-center m-auto flex-wrap md:flex-row md:-mx-2">
      <div className={` ${styles.box} w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0 `}>
        <a  className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
          <img src="https://www.ids.ac.uk/wp-content/uploads/2024/05/Blognews-story-1024x600-px-1.jpg" class="absolute z-0 object-fit w-full h-72 md:h-96 transform group-hover:scale-150" />
          <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
          <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
            <div className="h-1/2 relative">
              <div className="absolute bottom-0">
                <h2 className="font-bold text-white leading-tight transition duration-300 text-2xl pb-6 group-hover:underline">Electoral</h2>
              </div> 
            </div>
            <div className="h-1/2">
                <h3 className="font-bold text-white leading-tight transition duration-300 text- group-hover:underline">Ground Intelligence</h3>
              <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">We use ground intelligence, whisper campaign and grass root lead generation 
              techniques to reach ...</p>
              {/* <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button> */}
              <button
                      className="bg-white text-black text-sm  font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300"
                      onClick={() =>
                        handleReadMore(
                          `<div  > <img src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/111719-jzxpvdduzg-1548742552.jpg" class=" object-fit " />
          </div>   <h1 class='font-extrabold'>Ground Intelligence</h1> <p>We use ground intelligence, whisper campaign and grass root lead generation 
techniques to reach out to our constituencies, using new and effective 
technologies for campaigning. 
Through ground intelligence we understand the needs and problems of our 
constituencies. Through Whisper Campaign we reach out directly to the people 
and convey our message to them. Also, we reach out to every individual in the 
community through grass root lead generation, so that everyone can 
participate. 
Using all these techniques will make the campaign more effective and more 
people will connect with us by proper use of social media (Facebook, 
Instagram, WhatsApp, You Tube) how will the people of our constituency stand 
with us. 
</p>`
                        )
                      }
                    >
                      Read More
                    </button>
            </div>
          </div>
        </a>
      </div>


      <div className={`${styles.box} h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0`}>
        <a  className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
          <img src="https://etimg.etb2bimg.com/thumb/msid-102852245,imgsize-21972,width-1200,height=765,overlay-etgovernment/news/governance/centre-opposes-plea-to-replace-term-central-government-with-union-government.jpg" class="absolute z-0 object-fit w-full h-72 md:h-96" />
          <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-100"></div>
          <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
            <div className="h-1/2 relative">
              <div className="absolute bottom-0">
                <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">Governance</h2>
              </div>
            </div>
            <div className="h-1/2">
                <h3 className="font-bold text-white leading-tight transition duration-300 text- group-hover:underline">Scheme Outreach</h3>
              <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">Facilitates the application process to get information and assistance on all 
              schemes in the fields of government basic facilities...</p>
              {/* <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button> */}
              <button
                      className="bg-white text-black text-sm  font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300"
                      onClick={() =>
                        handleReadMore(
                          ` <div  > <img src="https://ascentgroupindia.com/wp-content/uploads/2021/08/25-Government-Schemes-that-are-Transforming-the-Lives-of-Rural-India.jpeg" class=" object-fit " />
          </div>  <h1 class='font-extrabold'>1.Scheme Outreach</h1> <p>Facilitates the application process to get information and assistance on all 
schemes in the fields of government basic facilities, health, education, 
employment and protection and to avail the benefits of the schemes you are 
entitled to. For this, by planning camps, helpdesks, local visits and 
online guidance, we make arrangements for you to avail various schemes. 
</p>
                           <div  > <img src="https://enwpgo.wordpress.com/wp-content/uploads/2023/02/website-branding-header.jpg" class=" object-fit " />
          </div>  <h1 class='font-extrabold'>2.Branding</h1> <p>Company branding is the process of creating a distinct identity of any business 
in the minds of consumers. for that we do branding of the company's business 
using social media. 
</p>
                          <div  > <img src="https://kalyanchandra.com/wp-content/uploads/2024/06/6ba8acc7-71f3-4189-97f1-4c387f38dd79.webp" class=" object-fit " />
          </div>  <h1 class='font-extrabold'>3.Ads Run</h1> <p>Depending on the objective you choose when you create your campaign, your 
ads can appear on Facebook, Messenger, Instagram, and the Meta Audience 
Network. Available placements are determined by your ad type and settings. 
</p>
                           <div  > <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2019-03/01/full/1551387254-5065.jpg?im=FeatureCrop,size=(826,465)" class=" object-fit " />
          </div>  <h1 class='font-extrabold'>4.Beneficiary identification</h1> <p>We are implementing a unique identifier system in our organization for 
financial institutions. This system is designed to distinguish beneficiaries from 
non-beneficiaries, ensuring protection against fraud and preventing duplicate 
payments.  
</p>`
                        )
                      }
                    >
                      Read More
                    </button>
            </div>
          </div>
        </a>
      </div>
      <div className={`${styles.box} h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0`}>
        <a  className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
          <img src="https://assets.thehansindia.com/hansindia-bucket/9060_corporate-life.jpg" class="absolute z-0 object-fit w-full h-72 md:h-96" />
          <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
          <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
            <div className="h-1/2 relative">
              <div className="absolute bottom-0">
                <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">Corporate</h2>
              </div>
            </div>
            <div className="h-1/2">
                <h3 clclassNameass="font-bold text-white leading-tight transition duration-300 text- group-hover:underline">Content creation</h3>
              <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">We create various types of advertising for the company, including blog posts, 
              videos, infographics, e-books...</p>
              {/* <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button> */}
              <button
                      className="bg-white text-black text-sm  font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300"
                      onClick={() =>
                        handleReadMore(
                          ` 
                          
                          <div  > <img src="https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class=" object-fit " />
          </div>    <h1 class='font-extrabold'>1.Content creation</h1> <p>We create various types of advertising for the company, including blog posts, 
videos, infographics, e-books, bad papers, and social media posts. It builds 
brand recognition and increases credibility. 
</p>

                          <div  > <img src="https://www.rgvn.org/wp-content/uploads/2023/02/328908003_929218424902493_3000442451411759110_n.jpg" class=" object-fit " />
          </div>    <h1 class='font-extrabold'>2.Dissemination</h1> <p>After creating the content, it is disseminated properly using social media 
platforms (Facebook, Twitter, LinkedIn), email marketing, and search engine 
optimization (SEO). 
</p>

                          <div  > <img src="https://strategicmanagementinsight.com/wp-content/uploads/featured-competitive-analysis.png" class=" object-fit " />
          </div>    <h1 class='font-extrabold'>3.Competitive Analysis</h1> <p>Computational Analysis Measures the performance of marketing strategies 
using data analysis tools. Improves marketing strategies by studying website 
traffic, user behaviour, and other key metrics with Google Analytics, SEMrush, 
and other tools. 
</p>
`
                        )
                      }
                    >
                      Read More
                    </button>
            </div>
          </div>
        </a>
      </div>
      {/* <div class="h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
        <a  class="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1521542464131-cb30f7398bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=384&q=80" class="absolute z-0 object-fit w-full h-72 md:h-96" />
          <div class="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
          <div class="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
            <div class="h-1/2 relative">
              <div class="absolute bottom-0">
                <h2 class="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">Six million Sky routers had serious security flaw</h2>
              </div>
            </div>
            <div class="h-1/2">
              <p class="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">About six million Sky routers had a significant software bug that could have allowed hackers to take over home networks.</p>
              <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
            </div>
          </div>
        </a>
      </div>*/}
    </div> 
  </div>
  {/* <div class="text-center text-white text-sm">
    Created by <a href="https://stephenainsworth.com" target="_blank" title="Stephen Ainsworth - Web Developer">Stephen Ainsworth</a>
  </div> */}
</div>




    <div className="bg-gray-800 min-h-screen">
        <h2 className='font-bold text-white p-10 pb-0 text-3xl   text-center'>CONSULTANCY SERVICES</h2>
  <div className="max-w-screen-xl mx-auto px-4 pt-16 pb-4">
    <div className="flex flex-col justify-center flex-wrap md:flex-row md:-mx-2">
      <div className={`${styles.box} w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0`}>
        <a  className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
          <img src="https://winpure.com/wp-content/uploads/2023/12/360-degree-customer-view-1.png" class="absolute z-0 object-fit w-full h-72 md:h-96 transform group-hover:scale-150" />
          <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
          <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
            <div className="h-1/2 relative">
              <div className="absolute bottom-0">
                <h2 className="font-bold text-white leading-tight transition duration-300 text-2xl pb-6 group-hover:underline">Buisness 360</h2>
              </div> 
            </div>
            <div className="h-1/2">
                {/* <h3 class="font-bold text-white leading-tight transition duration-300 text- group-hover:underline">Ground Intelligence</h3> */}
              <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">In our organization, we are putting in place a framework for financial 
              institutions to be uniquely identified...</p>
              {/* <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button> */}
              <button
                      className="bg-white text-black text-sm  font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300"
                      onClick={() =>
                        handleReadMore(
                          `  <div  > <img src="https://winpure.com/wp-content/uploads/2023/12/360-degree-customer-view-1.png" class=" object-fit " />
          </div>   <h1 class='font-extrabold'>Buisness 360</h1> <p>In our organization, we are putting in place a framework for financial 
institutions to be uniquely identified. By separating beneficiaries from non
beneficiaries, this approach guards against fraud and avoids making redundant 
payments . 
</p>`
                        )
                      }
                    >
                      Read More
                    </button>
            </div>
          </div>
        </a>
      </div>

      <div className={`${styles.box} h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0`}>
        <a  className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
          <img src="/growth.jpg" class="absolute z-0 object-fit w-full h-72 md:h-96" />
          <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-100"></div>
          <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
            <div className="h-1/2 relative">
              <div className="absolute bottom-0">
                <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">Growth Hacks</h2>
              </div>
            </div>
            <div className="h-1/2">
                {/* <h3 class="font-bold text-white leading-tight transition duration-300 text- group-hover:underline">Scheme Outreach</h3> */}
              <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">In our organization, we use cost-effective and resource-light digital marketing 
              strategies to increase brand exposure...</p>
              {/* <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button> */}
              <button
                      className="bg-white text-black text-sm  font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300"
                      onClick={() =>
                        handleReadMore(
                          ` <div  > <img src="/growth.jpg" class=" object-fit " />
          </div>    <h1 class='font-extrabold'>2.Growth Hacks</h1> <p>In our organization, we use cost-effective and resource-light digital marketing 
strategies to increase brand exposure, boost product sales, and develop and 
maintain an active user base. 
</p>`
                        )
                      }
                    >
                      Read More
                    </button>
            </div>
          </div>
        </a>
      </div>

      <div className={`${styles.box} h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0`}>
        <a  className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
          <img src="https://media.licdn.com/dms/image/v2/D4E12AQFSVfy_Nl8SsQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1675289832452?e=2147483647&v=beta&t=i5mQ5NZ3BzyYu4reVjJSzBDi_uDHeO-1rEY_yUA4Myc" class="absolute z-0 object-fit w-full h-72 md:h-96" />
          <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
          <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
            <div className="h-1/2 relative">
              <div className="absolute bottom-0">
                <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">Public-Private Partnership</h2>
              </div>
            </div>
            <div className="h-1/2">
                {/* <h3 class="font-bold text-white leading-tight transition duration-300 text- group-hover:underline">Content creation</h3> */}
              <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">In our organization, we do this: A long-term agreement between a government 
              agency and a private company to...</p>
              {/* <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button> */}
              <button
                      className="bg-white text-black text-sm  font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300"
                      onClick={() =>
                        handleReadMore(
                          ` <div  > <img src="https://media.licdn.com/dms/image/v2/D4E12AQFSVfy_Nl8SsQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1675289832452?e=2147483647&v=beta&t=i5mQ5NZ3BzyYu4reVjJSzBDi_uDHeO-1rEY_yUA4Myc" class=" object-fit " />
          </div>   <h1 class='font-extrabold'>Public-Private Partnership</h1> <p>In our organization, we do this: A long-term agreement between a government 
agency and a private company to provide public services or assets is known as a 
public-private partnership, or PPP. Under this structure, the private party has 
managerial responsibilities, assumes a substantial amount of risk, and is 
compensated according to their performance.  
</p>`
                        )
                      }
                    >
                      Read More
                    </button>
            </div>
          </div>
        </a>
      </div>
      {/* <div class="h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
        <a  class="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1521542464131-cb30f7398bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=384&q=80" class="absolute z-0 object-fit w-full h-72 md:h-96" />
          <div class="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
          <div class="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
            <div class="h-1/2 relative">
              <div class="absolute bottom-0">
                <h2 class="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">Six million Sky routers had serious security flaw</h2>
              </div>
            </div>
            <div class="h-1/2">
              <p class="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">About six million Sky routers had a significant software bug that could have allowed hackers to take over home networks.</p>
              <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
            </div>
          </div>
        </a>
      </div>*/}
    </div> 
  </div>
  {/* <div class="text-center text-white text-sm">
    Created by <a href="https://stephenainsworth.com" target="_blank" title="Stephen Ainsworth - Web Developer">Stephen Ainsworth</a>
  </div> */}
</div>


    <div className="bg-gray-800 min-h-screen">
        <h2 className='font-bold text-white p-10 pb-0 text-3xl   text-center'>INFORMATION TECHNOLOGY (IT) SERVICES</h2>
  <div className="max-w-screen-xl mx-auto px-4 pt-16 pb-4">
    <div className="flex flex-col flex-wrap md:flex-row md:-mx-2">
      <div className={`${styles.box} w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0`}>
        <a  className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
          <img src="https://www.ibselectronics.com/getmedia/c099b913-b861-4031-a335-f609c09997cf/Internet-India.png" class="absolute z-0 object-fit w-full h-72 md:h-96 transform group-hover:scale-150" />
          <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
          <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
            <div className="h-1/2 relative">
              <div className="absolute bottom-0">
                <h2 className="font-bold text-white leading-tight transition duration-300 text-2xl pb-6 group-hover:underline">Multimedia Connectivity Hub</h2>
              </div> 
            </div>
            <div className="h-1/2">
                {/* <h3 class="font-bold text-white leading-tight transition duration-300 text- group-hover:underline">Ground Intelligence</h3> */}
              <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">uses top-notch audio and video conferencing tools to enable smooth 
              communication and teamwork....</p>
              <button
                      className="bg-white text-black text-sm  font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300"
                      onClick={() =>
                        handleReadMore(
                          ` <div  > <img src="https://www.ibselectronics.com/getmedia/c099b913-b861-4031-a335-f609c09997cf/Internet-India.png " class=" object-fit " />
          </div>   <h1 class='font-extrabold'>Multimedia Connectivity Hub</h1> <p>uses top-notch audio and video conferencing tools to enable smooth 
communication and teamwork. 
allows for real-time communication across several places, guaranteeing 
efficient team participation and decision-making. 
A device that connects to a network and provides access to streaming services, 
music, images, and videos is known as a multimedia connectivity hub or media 
hub.   
</p>`
                        )
                      }
                    >
                      Read More
                    </button> </div>
          </div>
        </a>
      </div>
      <div className={`${styles.box} h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0`}>
        <a  className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
          <img src="https://cdn1.expresscomputer.in/wp-content/uploads/2023/07/02172929/EC_businessman_holding_digital_chatbot_750.jpg" class="absolute z-0 object-fit w-full h-72 md:h-96" />
          <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-100"></div>
          <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
            <div className="h-1/2 relative">
              <div className="absolute bottom-0">
                <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">Multiple Bots</h2>
              </div>
            </div>
            <div className="h-1/2">
                {/* <h3 class="font-bold text-white leading-tight transition duration-300 text- group-hover:underline">Scheme Outreach</h3> */}
              <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">uses intelligent bots to automate procedures, manage repetitive chores, and 
              enhance customer relations...</p>
              {/* <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button> */}
              <button
                      className="bg-white text-black text-sm  font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300"
                      onClick={() =>
                        handleReadMore(
                          ` <div  > <img src="https://cdn1.expresscomputer.in/wp-content/uploads/2023/07/02172929/EC_businessman_holding_digital_chatbot_750.jpg" class=" object-fit " />
          </div>    <h1 class='font-extrabold'>Multiple Bots </h1> <p>uses intelligent bots to automate procedures, manage repetitive chores, and 
enhance customer relations. 
incorporates task-specific bots, voice assistants, and chatbots to improve 
operational efficiency.  
</p>`
                        )
                      }
                    >
                      Read More
                    </button>
            </div>
          </div>
        </a>
      </div>
      <div className={`${styles.box} h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0`}>
        <a  className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
          <img src="https://imageio.forbes.com/specials-images/imageserve/6704593b31c6ab97b4e24c89/Businessman-touching-the-brain-working-of-Artificial-Intelligence--AI---Automation-/960x0.jpg?format=jpg&width=960" class="absolute z-0 object-fit w-full h-72 md:h-96" />
          <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
          <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
            <div className="h-1/2 relative">
              <div className="absolute bottom-0">
                <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">AI-Based Personalized Outreach</h2>
              </div>
            </div>
            <div className="h-1/2">
                {/* <h3 class="font-bold text-white leading-tight transition duration-300 text- group-hover:underline">Content creation</h3> */}
              <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">makes use of artificial intelligence to develop customized outreach initiatives. 
              enhances engagement and conversion rates by...</p>
              {/* <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button> */}
              <button
                      className="bg-white text-black text-sm  font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300"
                      onClick={() =>
                        handleReadMore(
                          `<div  > <img src="https://imageio.forbes.com/specials-images/imageserve/6704593b31c6ab97b4e24c89/Businessman-touching-the-brain-working-of-Artificial-Intelligence--AI---Automation-/960x0.jpg?format=jpg&width=" class=" object-fit " />
          </div>     <h1 class='font-extrabold'>AI-Based Personalized Outreach</h1> <p>makes use of artificial intelligence to develop customized outreach initiatives. 
enhances engagement and conversion rates by delivering personalized 
messages based on user behaviour and preferences.  
</p>`
                        )
                      }
                    >
                      Read More
                    </button>
            </div>
          </div>
        </a>
      </div> 

      <div className={`${styles.box} h-72 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0`}>
        <a  className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
          <img src="https://bl-i.thgim.com/public/incoming/tz76lq/article65771089.ece/alternates/FREE_1200/ad.jpg" class="absolute z-0 object-fit w-full h-72 md:h-96" />
          <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
          <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
            <div className="h-1/2 relative">
              <div className="absolute bottom-0">
                <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">Personalized and Targeted Outreach</h2>
              </div>
            </div>
            <div className="h-1/2">
              <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">uses segmentation and advanced analytics to precisely target particular 
              audience groups..</p>
              {/* <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button> */}
              <button
                      className="bg-white text-black text-sm  font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300"
                      onClick={() =>
                        handleReadMore(
                          ` <div  > <img src="https://bl-i.thgim.com/public/incoming/tz76lq/article65771089.ece/alternates/FREE_1200/ad.jpg" class=" object-fit " />
          </div>    <h1 class='font-extrabold'>Personalized and Targeted Outreach </h1> <p>uses segmentation and advanced analytics to precisely target particular 
audience groups. 
For optimum impact, make sure your communications speak to the 
requirements and preferences of the audience. 
</p>`
                        )
                      }
                    >
                      Read More
                    </button>
            </div>
          </div>
        </a>
      </div>

      <div className={`${styles.box} h-72 mt-5 md:h-96 w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0`}>
        <a  className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
          <img src="https://www.learningroutes.in/_next/image?url=https%3A%2F%2Faskusedu.com%2Fblogdashboard%2Fwp-content%2Fuploads%2F2024%2F04%2FEd-tech-in-rural-india.webp&w=1920&q=75" class="absolute z-0 object-fit w-full h-72 md:h-96" />
          <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
          <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
            <div className="h-1/2 relative">
              <div className="absolute bottom-0">
                <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">Inclusion of the Last Mile</h2>
              </div>
            </div>
            <div className="h-1/2">
              <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">aims to close the digital divide by providing IT services to underserved or rural 
              communities...</p>
              {/* <button class="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button> */}
          <button
                      className="bg-white text-black text-sm  font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300"
                      onClick={() =>
                        handleReadMore(
                          ` <div  > <img src="https://www.learningroutes.in/_next/image?url=https%3A%2F%2Faskusedu.com%2Fblogdashboard%2Fwp-content%2Fuploads%2F2024%2F04%2FEd-tech-in-rural-india.webp&w=1920&q=75" class=" object-fit " />
          </div>    <h1 class='font-extrabold'>Inclusion of the Last Mile</h1> <p>aims to close the digital divide by providing IT services to underserved or rural 
communities. 
makes technology-driven solutions more accessible and connected, 
guaranteeing that everyone gains from them. 
</p>`
                        )
                      }
                    >
                      Read More
                    </button>
            </div>
          </div>
        </a>
      </div>
      
    </div> 
  </div>
  {/* <div class="text-center text-white text-sm">
    Created by <a href="https://stephenainsworth.com" target="_blank" title="Stephen Ainsworth - Web Developer">Stephen Ainsworth</a>
  </div> */}
</div>

{isPopupOpen && (
  <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-8 max-w-lg w-full">
      <h2 className="text-2xl font-bold mb-4">Details</h2>
      {/* Add scrollable container */}
      <div 
        className="max-h-96 overflow-y-auto mb-6" 
        dangerouslySetInnerHTML={{ __html: popupContent }} 
      />
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
        onClick={closePopup}
      >
        Close
      </button>
    </div>
  </div>
)}

    </>
  )
}

export default cart



// import { useState, useEffect } from "react";
// import styles from "@/styles/Cart.module.css";

// function Cart() {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [popupContent, setPopupContent] = useState("");

//   useEffect(() => {
//     const boxes = document.querySelectorAll(`.${styles.box}`);

//     const checkBoxes = () => {
//       const triggerBottom = window.innerHeight * 0.8; // Trigger point

//       boxes.forEach((box) => {
//         const boxTop = box.getBoundingClientRect().top;

//         if (boxTop < triggerBottom) {
//           box.classList.add(styles.show);
//         } else {
//           box.classList.remove(styles.show);
//         }
//       });
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", checkBoxes);

//     // Call on mount to handle boxes already in view
//     checkBoxes();

//     // Cleanup listener on unmount
//     return () => {
//       window.removeEventListener("scroll", checkBoxes);
//     };
//   }, []);

//   // Function to open the popup with specific content
//   const handleReadMore = (content) => {
//     setPopupContent(content);
//     setIsPopupOpen(true);
//   };

//   // Function to close the popup
//   const closePopup = () => {
//     setIsPopupOpen(false);
//     setPopupContent("");
//   };

//   return (
//     <>
//       <div className="bg-gray-800 min-h-screen">
//         <h2 className="font-bold text-white p-10 pb-0 text-3xl text-center">
//           DIGITAL MARKETING
//         </h2>
//         <div className="max-w-screen-xl mx-auto pt-16 pb-4">
//           <div className="flex flex-col justify-center m-auto flex-wrap md:flex-row md:-mx-2">
//             {/* Box 1 */}
//             <div className={`${styles.box} w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0`}>
//               <a
//                 className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg"
//               >
//                 <img
//                   src="https://www.ids.ac.uk/wp-content/uploads/2024/05/Blognews-story-1024x600-px-1.jpg"
//                   className="absolute z-0 object-cover w-full h-72 md:h-96 transform group-hover:scale-150"
//                 />
//                 <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
//                 <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
//                   <div className="h-1/2 relative">
//                     <div className="absolute bottom-0">
//                       <h2 className="font-bold text-white leading-tight transition duration-300 text-2xl pb-6 group-hover:underline">
//                         Electoral
//                       </h2>
//                     </div>
//                   </div>
//                   <div className="h-1/2">
//                     <h3 className="font-bold text-white leading-tight transition duration-300 group-hover:underline">
//                       Ground Intelligence
//                     </h3>
//                     <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">
//                       We use ground intelligence, whisper campaign, and grassroots lead generation
//                       techniques to reach ...
//                     </p>
//                     <button
//                       className="bg-white text-black text-sm font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300"
//                       onClick={() =>
//                         handleReadMore(
//                           `<div>
//                             <img src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/111719-jzxpvdduzg-1548742552.jpg" class="object-cover" />
//                             <h1 class='font-extrabold'>Ground Intelligence</h1>
//                             <p>
//                               We use ground intelligence, whisper campaigns, and grassroots lead generation 
//                               techniques to reach out to our constituencies, using new and effective 
//                               technologies for campaigning.
//                             </p>
//                           </div>`
//                         )
//                       }
//                     >
//                       Read More
//                     </button>
//                   </div>
//                 </div>
//               </a>
//             </div>

//             {/* Box 2 */}
//             <div className={`${styles.box} w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0`}>
//               <a
//                 className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg"
//               >
//                 <img
//                   src="https://etimg.etb2bimg.com/thumb/msid-102852245,imgsize-21972,width-1200,height=765,overlay-etgovernment/news/governance/centre-opposes-plea-to-replace-term-central-government-with-union-government.jpg"
//                   className="absolute z-0 object-cover w-full h-72 md:h-96"
//                 />
//                 <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
//                 <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
//                   <div className="h-1/2 relative">
//                     <div className="absolute bottom-0">
//                       <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">
//                         Governance
//                       </h2>
//                     </div>
//                   </div>
//                   <div className="h-1/2">
//                     <h3 className="font-bold text-white leading-tight transition duration-300 group-hover:underline">
//                       Scheme Outreach
//                     </h3>
//                     <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">
//                       Facilitates the application process to get information and assistance on all 
//                       schemes in the fields of government basic facilities...
//                     </p>
//                     <button
//                       className="bg-white text-black text-sm font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300"
//                       onClick={() =>
//                         handleReadMore(
//                           `<div>
//                             <h1 class='font-extrabold'>Scheme Outreach</h1>
//                             <p>
//                               Facilitates the application process to get information and assistance on all 
//                               schemes in the fields of government basic facilities, health, education, 
//                               employment, and protection.
//                             </p>
//                           </div>`
//                         )
//                       }
//                     >
//                       Read More
//                     </button>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Popup */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg p-8 max-w-lg w-full">
//             <h2 className="text-2xl font-bold mb-4">Details</h2>
//             <div
//               className="max-h-96 overflow-y-auto mb-6"
//               dangerouslySetInnerHTML={{ __html: popupContent }}
//             />
//             <button
//               className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
//               onClick={closePopup}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Cart;
