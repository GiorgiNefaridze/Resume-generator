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
    setSkills
}) {
    const storeNameInLocalStorage = (e) => {
        setName(e.target.value)
        localStorage.setItem("name", e.target.value)
        setData({
            ...data,
            "name": e.target.value
        })
    }

    const storeNumberInLocalStorage = (e) => {
        setNumber(e.target.value)
        localStorage.setItem("number", e.target.value)
        setData({
            ...data,
            "number": e.target.value
        })
    }

    const storeEmailInLocalStorage = (e) => {
        setEmail(e.target.value)
        localStorage.setItem("email", e.target.value)
        setData({
            ...data,
            "email": e.target.value
        })
    }

    const storeAdressInLocalStorage = (e) => {
        setAdress(e.target.value)
        localStorage.setItem("adress", e.target.value)
        setData({
            ...data,
            "adress": e.target.value
        })
    }

    const storeSummaryInLocalStorage = (e) => {
        setSummary(e.target.value)
        localStorage.setItem("summary", e.target.value)
        setData({
            ...data,
            "summary": e.target.value
        })
    }

    const storeExperienceInLocalStorage = (e) => {
        setExperience(e.target.value)
        localStorage.setItem("experience", e.target.value)
        setData({
            ...data,
            "experience": e.target.value
        })
    }

    const storeSkillInLocalStorage = (e) => {
        setSkills(e.target.value)
        localStorage.setItem("skills", e.target.value)
        setData({
            ...data,
            "skills": e.target.value
        })
    }

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
                            onChange={(e) => storeNameInLocalStorage(e)}
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
                            onChange={(e) => storeNumberInLocalStorage(e)}
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
                            onChange={(e) => storeEmailInLocalStorage(e)}
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
                            type="text"
                            onChange={(e) => storeAdressInLocalStorage(e)}
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
                            onChange={(e) => storeSummaryInLocalStorage(e)}
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
                            onChange={(e) => storeSkillInLocalStorage(e)}
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
                            onChange={(e) => storeExperienceInLocalStorage(e)}
                            id="experience"/>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}