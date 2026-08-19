function HeaderSection(props){
    console.log(props)
    return<>
    <h1>Hello!!! {props.name} </h1>

    </>
}

export function ParagraphSection(){
    return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eligendi molestiae sed excepturi repellendus? Maxime incidunt fugiat dicta, quae excepturi, officiis porro quibusdam est ad ratione dignissimos tempora qui laudantium!</p>
}

export default HeaderSection;