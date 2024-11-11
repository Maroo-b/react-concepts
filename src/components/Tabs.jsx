export default function Tabs({children, buttons, buttonsContainer = 'menu'}) {
    // This is needed as custom component should start with a capital case
    // and this const is for passing the value from the prop.
    const ButtonsContainer = buttonsContainer

    return (
        <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
        </>
    )
}