import { Link } from "react-router-dom";

type IAccountAddons = {
    img: {
        src: string;
        atl: string;
    };
    text: string;
    link: string;
}

function GoogleFacebook(props: IAccountAddons) {
    const { img, text, link } = props;
    return (
        <>
            <Link className="social-button flex flex-row gap-2 items-center border-2 rounded-lg py-4 px-8" to={link}>
                <img className="h-4" src={img.src} alt={img.atl} />
                <p>{text}</p>
            </Link>
        </>
    )
}

export default GoogleFacebook;