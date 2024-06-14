/**
 * @auhor Chris Huang <asd978645312@gmail.com>
 */
import Image from "next/image";

export default function CustomCard({item}){
    return(
        <div class="border">
            <dev>
                <Imges src={item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1}></Imges>
                {item.ScenicSpotName}
            </dev>
        </div>
    )
}