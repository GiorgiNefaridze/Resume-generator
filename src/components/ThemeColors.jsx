export default function ThemeColors({colors, selectColor, themeColorChangeByHover}) {
    return ( 
        <> 
            {colors.map((color) => (
                <div
                    onMouseEnter={() => themeColorChangeByHover(color.backgroundColor)}
                    className={color.isSelected
                    ? "selected"
                    : ""}
                    onClick={(e) => selectColor(e, color.id)}
                    key={color.id}
                    style={{backgroundColor: color.backgroundColor}}>
                </div>
            ))} 
        </>
    )
}