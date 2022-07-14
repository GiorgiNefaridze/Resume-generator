import {
    Form,
    Row,
    Col,
    FormGroup,
    Label,
    Input
} from 'reactstrap'

export default function FormForTheme({
    data,
    setData,
    name,
    setName,
    email,
    number,
    setNumber,
    setEmail,
    adress,
    setAdress,
    summary,
    setSummary,
    experience,
    setExperience,
    skills,
    setSkills,
    parsedSavedJSON
}) {

    return (
        <Form>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="name">
                            სახელი გვარი
                        </Label>
                        <Input
                            value={name}
                            placeholder={parsedSavedJSON && parsedSavedJSON.name}
                            onChange={(e) => {setName(e.target.value);localStorage.setItem("name", e.target.value)}}
                            id="name"
                            type="text"/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label htmlFor="tel">
                            ტელ:
                        </Label>
                        <Input
                            value={number}
                            placeholder={parsedSavedJSON && parsedSavedJSON.number}
                            onChange={(e) => {setNumber(e.target.value);localStorage.setItem("number", e.target.value)}}
                            type="text"
                            id="tel"/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label htmlFor="email">
                            მეილი:
                        </Label>
                        <Input
                            value={email}
                            placeholder={parsedSavedJSON && parsedSavedJSON.email}
                            onChange={(e) => {setEmail(e.target.value);localStorage.setItem("email", e.target.value)}}
                            id="email"
                            type="email"/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label htmlFor="adress">
                            მისამართი:
                        </Label>
                        <Input
                            value={adress}
                            placeholder={parsedSavedJSON && parsedSavedJSON.adress}
                            type="text"
                            onChange={(e) => {setAdress(e.target.value);localStorage.setItem("adress", e.target.value)}}
                            id="adress"/>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for="summary">
                            მოკლე აღწერა
                        </Label>
                        <Input
                            value={summary}
                            placeholder={parsedSavedJSON && parsedSavedJSON.summary}
                            onChange={(e) => {setSummary(e.target.value);localStorage.setItem("summary", e.target.value)}}
                            id="summary"/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label htmlFor="skills">
                            სკილები:
                        </Label>
                        <Input
                            value={skills}
                            placeholder={parsedSavedJSON && parsedSavedJSON.skills}
                            onChange={(e) => {setSkills(e.target.value);localStorage.setItem("skills", e.target.value)}}
                            type="text"
                            id="skills"/>
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="experience">
                            გამოცდილება
                        </Label>
                        <Input
                            value={experience}
                            placeholder={parsedSavedJSON && parsedSavedJSON.experience}
                            onChange={(e) => {setExperience(e.target.value);localStorage.setItem("experience", e.target.value)}}
                            id="experience"/>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}