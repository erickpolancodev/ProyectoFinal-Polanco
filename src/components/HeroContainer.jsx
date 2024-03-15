export const HeroContainer = ({titulo}) => {
    return(
        <div className="hero container mx-auto py-2 mb-2 flex justify-center items-center">
            <h1 className="titulo">{titulo}</h1>
        </div>
    )
}