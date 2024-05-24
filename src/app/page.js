/**
 * @auhor Chris Huang <asd978645312@gmail.com>
 */
import Link from "next/link";
import Image from "next/image";
import { Navbar,
         NavbarBrand,
         NavbarCollapse, 
         NavbarLink, 
         NavbarToggle,
         Footer,
         FooterBrand, 
         FooterCopyright, 
         FooterDivider, 
         FooterLink, 
         FooterLinkGroup,
         Carousel,
         Card,
         Button,
         DarkThelemeTogg,
         DarkThemeToggle
         } from "flowbite-react";

export default function Home() {

  const items = [
    {
      cover:"/banner/banner-1.jpg",
      name:"北港朝天宮",
      desscription:"北港朝天宮，俗稱北港媽，當地人稱媽祖宮、媽祖廟，舊稱為天后宮。是一座位在臺灣雲林縣北港鎮光民里的媽祖廟，主祀天上聖母媽祖。 該廟由臨濟宗第34代樹璧和尚創立於康熙三十三年。",

    },
    {
      cover:"/banner/banner-2.jpg",
      name:"古坑綠色隧道",
      desscription:"古坑綠色隧道位於斗六柴里橋，台三線往永光方向的綠色隧道，全長約有兩公里長，兩旁種植著約五十年歷史的芒果樹，綠蔭蔽天形成美麗的綠色隧道。綠色隧道亦提供腳踏車出租或傳統牛步車代步。",
    },
    {
      cover:"/banner/banner-3.jpg",
      name:"雅聞峇里海岸觀光工廠",
      desscription:"位於斗六石榴班百年火車站附近，舒壓、藝術、美學、購物的雅聞峇里海岸園區，是國內最大的南洋風情景觀，擁有大規模的茅草屋群、棕櫚樹、迎賓瀑布、鏡面水池、3D美式塗鴉牆及明媚的海岸沙灘風景，彷彿置身異國天堂。",
    },
    {
      cover:"/banner/banner-4.jpg",
      name:"劍湖山世界主題樂園",
      desscription:"劍湖山世界是臺灣主題遊樂園，通稱劍湖山，位於雲林縣古坑鄉永光村劍湖附近，綜合「休閒、遊樂、文化、科技」四大功能。全園佔地面積60多公頃，主要大型熱門活動常見為痛車，為嘉義耐斯企業旗下之大型遊樂園。和義大世界、六福村、九族文化村並稱臺灣遊樂園的「一三六九」。",
    },
  ];

  return (
    <>
      <div className="bg-neutral-600">
        <div className="container mx-auto">
          <Navbar fluid className="bg-neutral-600">
            <NavbarBrand as={Link} href="/">
              <img src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
              <span className="self-center whitespace-nowrap text-xl font-semibold ext-white">雲林旅遊網</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
              <NavbarLink href="#" className="text-white">
                <span className="px-4 py-2 hover:text-yellow-50 hover:border-b">交通</span>
              </NavbarLink>
              <NavbarLink as={Link} href="#" className="text-white">
              <span className="px-4 py-2 hover:text-yellow-50 hover:border-b">景點</span>
              </NavbarLink>
              <NavbarLink href="#" className="text-white">
              <span className="px-4 py-2 hover:text-yellow-50 hover:border-b">關於我們</span>
              </NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle/>
          </Navbar>
        </div>
      </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
          <img src="/banner/banner-1.jpg" alt="由 WU PEI HSUAN - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=110297869" />
          <img src="/banner/banner-2.jpg" alt="..." />
          <img src="/banner/banner-3.jpg" alt="..." />
          <img src="/banner/banner-4.jpg" alt="..." />
        </Carousel>
      </div>

      <div className="bg-white">
       <div className="container mx-auto grid grid-cols-4 gap-4">
          {items.map( item =>
        
          <Card
            className="max-w-sm"
            imgAlt={item.name}
            imgSrc={item.cover}
           >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            {item.desscription}
            </p>
            <Button>
              Read more
              <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
          </Button>
          </Card>
          )}
        </div>
      </div>
      <Footer container>
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
     </Footer>
  </>
  
  );
}
