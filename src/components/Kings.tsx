import React from 'react'
import King from './King'

type Props = {
    filterSearchVal: string;
}


function Kings({filterSearchVal} : Props) {

    type King = {
        image: string,
        name : string,
        empire: string,
        reign : string | string[],
        description : string
    }

    const kings : King[] = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/CommodusHeadDetailFrontGetty.jpg/500px-CommodusHeadDetailFrontGetty.jpg",
            name: "Commodus",
            empire: "Roman Empire",
            reign : "177 - 192",
            description : "Commodus was a Roman emperor who ruled from 177 to 192. He served jointly with his father Marcus Aurelius from 176 until the latter's death in 180, and thereafter he reigned alone until his assassination. His reign is commonly thought of as marking the end of a golden period of peace in the history of the Roman Empire, known as the Pax Romana. "
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Attila_%C3%A1br%C3%A1zol%C3%A1s_Wilhelm_Dilich_Ungarische_Chronica.jpg",
            name: "Attila the Hun",
            empire: "Hunnic Empire",
            reign: "434 - 453",
            description: "Attila the Hun single-handedly wreaked more havoc than all his predecessors combined. He became the leader of the Huns in 434 AD and over the next 10 years, he led multiple invasions and succeeded in capturing territories that encompassed modern-day Hungary, Spain, Greece, and Italy."
        },
        {
            image: "https://images.immediate.co.uk/production/volatile/sites/7/2014/11/29.-GettyImages-563866193-2db9d52-e1565360394674.jpg?quality=90&resize=767,697",
            name: "Nero",
            empire: "Roman Empire",
            reign: "54 - 68",
            description: "Nero was one of the most infamous of Rome's emperors. History remembers him today as a madman with absolute power, a ruler who indulged in frequent debauchery and hated Christians.Apart from being a thorn in the side of the common people, he is also known to have murdered his own mother Agrippina and his wives, Octavia and Poppaea Sabina. And then there is the story of how he started a great fire in Rome so that he could build a new city center with a brand-new palace for himself. When the monstrous fire eventually died out after engulfing much of the city, the first thing he did was to build himself a brand-new palace."
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Wang_Wei_001.jpg/800px-Wang_Wei_001.jpg",
            name: "Fu Sheng",
            empire: "Qin Dynasty of China",
            reign: "355 - 357",
            description: "Fu Sheng was an infamous emperor of the Qin dynasty who ruled for only two years during the period of the Dong Jin dynasty (317-420 AD). But these two years' worth of lunacy and unprecedented pride were enough to send him to his death at the hands of his own family members.He was blind in one eye and legend says that he lost that eye when an eagle viciously poked it out while he was trying to steal its eggs. When he came to power, he decreed that using words such as “without,” “devoid,” or “lacking” was taboo and punishable by death."
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Vlad_Tepes_002.jpg/1280px-Vlad_Tepes_002.jpg",
            name: "Vlad the Impaler",
            empire: "Ottoman Empire",
            reign: ["1448", "1456 - 1462", "1476 - 1477" ],
            description: "We have heard much about the cinematic Dracula, but only a few know that his character was inspired by a real-life person. Vlad the Impaler, as the name suggests, was known to kill his enemies by impaling their bodies on blunt stakes.He spent much of his life avenging the murder of his father and older brother, a mission he executed without mercy. He never gave his enemies a quick death. They would die slowly in excruciating pain inflicted by stakes that would pierce through their abdomens and chests. And here is the catch, no matter what felony you committed - a murder, or just stealing some bread - death by impalement was the only punishment."
        },
        {
            image: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTgxMzEzNzkwODQxNzI2OTIz/gettyimages-517443168.jpg",
            name: "Ivan IV the Terrible",
            empire: "Russian Empire",
            reign: "1547 - 1575",
            description: "A number of Russian tsars could have made it on to this list, but the first tsar of them all, Ivan the Fourth, gets a place in the top five for his sheer notoriety. Yes, he played a pivotal role in creating a central, more stable Russia, but he is also known for his frequent violent outbursts that led to dire consequences on multiple occasions."
        }



    ]


    const filterKingsBySearch = kings.filter(king => king.name.toLocaleLowerCase().includes(filterSearchVal.toLocaleLowerCase()));
    console.log(filterKingsBySearch);

  return (
    <div className='kings'>
            {filterKingsBySearch.length <= 0 && <h4>Try searching for something else</h4>}
            {filterKingsBySearch.map( (king : King) => (
                <King key={king.name} image={king.image} name={king.name} empire={king.empire} reign={king.reign} description={king.description} />
            ))}
    </div>
  )
}

export default Kings