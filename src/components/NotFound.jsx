import { HeroContainer } from "./HeroContainer"
export const NotFound = ({actual}) => {
    return(
        <>
            <HeroContainer titulo={actual}/>
            <div className="min-h-20 flex justify-center items-center">
                <p>Página no encontrada</p>
            </div>
        </>
        
    )
}