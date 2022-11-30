# React-modal-lib 

## Description
A modal pluggin for react using `create-react-app`.

## Installation
Run the following command:

`npm install modal-lib`


## How to use ?
**1 - Import the pluggin :**

`import {Modal} from "modal-lib"`


**2 - Use this state :**

`const [displayModal, setDisplayModal] = useState(false)`


**3 - Return the modal :**

```
<Modal 
    modalStyle={modalStyle} 
    modalHeaderStyle={modalHeaderStyle} 
    titleStyle={titleStyle}
    modalBodyStyle={modalBodyStyle} 
    modalFooterStyle={modalFooterStyle} 
    xButtonStyle={xButtonStyle} 
    footerButton1Style={footerButton1Style}
    footerButton2Style={footerButton2Style}
    title="Enter your modal title here" 
    message="Hello, your message here" 
    buttonText1="Ok"
    buttonText2="Cancel"
    showModal={displayModal} 
    hideModal={()=>setDisplayModal(false)} 
/>
```

## Give it your own style !
**Put into your component for example:**

```
const modalStyle = {
    "background": "",
    "margin": "",
    "borderRadius": "",
    "maxWidth": "",
    "width": "",
    "padding": "",
    "border": "",
}
```

```
const modalHeaderStyle = {
    "display": "flex",
    ....
}
```

