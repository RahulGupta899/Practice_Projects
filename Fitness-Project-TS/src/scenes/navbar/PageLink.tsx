import AnchorLink from 'react-anchor-link-smooth-scroll'
import {SelectedPageEnum} from '@/shared/types'

type Props = {
    pageName: string;
    selectedPage: SelectedPageEnum;
    setSelectedPage: (value: SelectedPageEnum) => void;
}

const PageLink = ({ pageName, selectedPage, setSelectedPage }: Props) => {

    // SECTION NAME 
    let lowerCasePageName = pageName.toLowerCase().replace(/ /g, '') as SelectedPageEnum    // Output: Our classes -> ourclasses
                                                                        // as selectedPageEnum basically it tells the variable that its a part of selectedPageEnum

    return (
        <div
            className={`${(selectedPage === lowerCasePageName) ? 'text-primary-500' : ''} cursor-pointer transition duration-500 hover:text-primary-300 font-semi
            `}

            // href={`#${lowerCasePageName}`}   // Reference for scroll to section

            onClick={() => { setSelectedPage(lowerCasePageName) }}
        >
            {pageName}
        </div>
    )
}

export default PageLink