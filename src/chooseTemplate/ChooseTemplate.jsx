import { useRef, useState } from 'react'
import { colorCards } from '../data/ColorCards'
import ThemeColors from '../components/ThemeColors'
import { angoraTheme, blueprintTheme } from '../data/Themes'
import { Link } from 'react-router-dom'
import './ChooseTemplate.scss'

//Themes import
import AngoraTheme from '../angoraTheme/AngoraTheme'
import BlueprintTheme from '../blueprintTheme/BlueprintTheme'

export default function ChooseTemplate() {
    //Refs
    const themeNameRef = useRef()
    const themeAboutRef = useRef()

    //States
    const [colors,setColors] = useState(colorCards)
    const [storageTHeme,setStorageTheme] = useState("Angora")
    const [storageColor,setStorageColor] = useState("")
    const [themeToggle,setThemeToggle] = useState(true)
    const [themeColor,setThemeColor] = useState("")


    const changeTheme = ()=> {
        if(themeNameRef.current.innerHTML === "Angora"){
            themeNameRef.current.innerHTML = blueprintTheme.theme
            themeAboutRef.current.innerHTML = blueprintTheme.about
            setStorageTheme(blueprintTheme.theme)
        }else{
            themeNameRef.current.innerHTML = angoraTheme.theme
            themeAboutRef.current.innerHTML = angoraTheme.about
            setStorageTheme(angoraTheme.theme)
        }
        setThemeToggle((prev)=> !prev)
    }

    const selectColor = (e,id) => {
        colors.forEach(e => {
            e.isSelected = false
        })

        const selectEachCard = colors.map(eachColor => {
            if(id === eachColor.id){
                return {
                    ...eachColor,
                    isSelected:!eachColor.isSelected
                }
            }
            return eachColor
        })

        setColors(selectEachCard)
        setStorageColor(e.target.style.backgroundColor)
    }

    const stillSelectedColor = () => {
        setThemeColor(storageColor)
    }

    const themeColorChangeByHover = (bgColor) => {
        setThemeColor(bgColor)
    }

    return (
        <div className='chooseTemplate-container'>
            <div className="chooseTemplate-container-themes">
                <div className="chooseTemplate-container-themes-header">
                    <h1 ref={themeNameRef}>{angoraTheme.theme}</h1>
                    <p ref={themeAboutRef}>{angoraTheme.about}</p>
                </div>
                <div onMouseLeave={stillSelectedColor} className="chooseTemplate-container-themes-colors">
                    <ThemeColors themeColorChangeByHover={themeColorChangeByHover} colors={colors} selectColor={selectColor} />
                </div>
                <div className="chooseTemplate-container-themes-select">
                    <Link to={`/create?theme=${storageTHeme}&color=${storageColor}`}>Select This Theme</Link>
                </div>
                <div className="chooseTemplate-container-themes-arrows">
                    <div title="თემის შეცვლა" onClick={changeTheme}></div>
                    <div title="თემის შეცვლა" onClick={changeTheme}></div>
                </div>
            </div>
            <div className='chooseTemplate-container-template'>
                {themeToggle ? <AngoraTheme themeColor={themeColor} /> : <BlueprintTheme themeColor={themeColor} />}
            </div>
        </div>
    )
}