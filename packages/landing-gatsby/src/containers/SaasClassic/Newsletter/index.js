import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import Input from 'reusecore/src/elements/Input';
import Container from 'common/src/components/UI/Container';

import NewsletterWrapper, {ContactFormInputs, ContactFormWrapper, FormLoader} from './newsletter.style';
import MailChimp from "../../../services/MailChimp";

import {MoonLoader} from "react-spinners";

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const Newsletter = ({
                        sectionWrapper,
                        textArea,
                        title,
                        description,
                    }) => {

    const [formState, setFormState] = useState({
        email: ""
    });

    const [submitting, setSubmitting] = useState(false)
    const [showSubmitSuccess, setShowSubmitSuccess] = useState(false)

    const handleSubmit = async () => {
        setSubmitting(true)
        let success = true
        try {
            const response = await MailChimp.submitEmailForm(formState)
            if (response.status !== 201) {
                success = false
            }
        } catch (err) {
            console.error("Failed to submit form", err)
            success = false
        }
        setSubmitting(false)
        setShowSubmitSuccess(success)
    }

    const handleFormChange = (name, value) => {
        const update = {...formState}
        update[name] = value
        setFormState(update)
    }

    const buttonStyle = {

    }

    const buttonSuccessState = showSubmitSuccess ?
        <Button style={buttonStyle} title="¡Listo! ya estas registrado." onClick={handleSubmit}/>:
        <Button style={buttonStyle} title="Me interesa" onClick={handleSubmit}/>

    const submitButton = submitting ?
        <FormLoader><div className="loader-container"><MoonLoader size={30}/></div></FormLoader> :
        buttonSuccessState

    return (
        <Box {...sectionWrapper} as="section" id="news_letter_section">
            <Container>
                <NewsletterWrapper>
                    <Box flex={"1"} >
                        <Heading content="Reserva tu lugar" {...title} />
                        <Text
                            content="Déjanos tus datos y te avisaremos cuando estemos listos para vender contigo. Si te urge déjanos saber y te ayudaremos con gusto"
                            {...description}
                        />
                    </Box>
                    <Box>
                        <ContactFormWrapper>
                          <ContactFormInputs>
                            <Input
                              className="email_input"
                              name="name"
                              inputType="text"
                              label="Nombre completo"
                              iconPosition="right"
                              isMaterial={true}
                              onChange={(valor) => handleFormChange("name", valor)}
                            />
                            <Input
                              name="email"
                              inputType="email"
                              label="Correo electronico"
                              iconPosition="right"
                              isMaterial={true}
                              className="email_input"
                              arial-label="email"
                              onChange={(valor) => handleFormChange("email", valor)}
                            />

                            <Input
                              className="email_input"
                              name="merchant"
                              inputType="text"
                              label="Nombre de tu empresa"
                              iconPosition="right"
                              isMaterial={true}
                              onChange={(valor) => handleFormChange("merchant", valor)}
                            />
                            <Input
                              className="email_input"
                              name="phone"
                              inputType="text"
                              label="Teléfono"
                              iconPosition="right"
                              isMaterial={true}
                              onChange={(valor) => handleFormChange("phone", valor)}
                            />
                            <Input
                              className="email_input"
                              name="industry"
                              inputType="text"
                              label="Industria"
                              iconPosition="right"
                              isMaterial={true}
                              onChange={(valor) => handleFormChange("industry", valor)}
                            />
                          </ContactFormInputs>
                        </ContactFormWrapper>
                    </Box>
                  <Box>
                    {submitButton}
                  </Box>
                </NewsletterWrapper>
            </Container>
        </Box>
    );
};

Newsletter.propTypes = {
    sectionWrapper: PropTypes.object,
    textArea: PropTypes.object,
    buttonArea: PropTypes.object,
    buttonStyle: PropTypes.object,
    title: PropTypes.object,
    description: PropTypes.object,
};

Newsletter.defaultProps = {
    sectionWrapper: {},
    textArea: {
        mb: ['40px', '40px', '40px', '0', '0'],
        pr: ['0', '0', '0', '80px', '100px'],
    },
    title: {
        fontSize: ['18px', '20px', '22px', '24px', '26px'],
        fontWeight: '500',
        color: '#fff',
        lineHeight: '1.34',
        mb: ['14px', '14px', '14px', '14px', '13px'],
        textAlign: ['center', 'center', 'center', 'left', 'left'],
        letterSpacing: '-0.025em',
    },
    description: {
        fontSize: ['14px', '14px'],
        fontWeight: '400',
        color: '#fefefe',
        lineHeight: '1.7',
        mb: 0,
        textAlign: ['center', 'center', 'center', 'left', 'left'],
    },
    buttonArea: {
        zIndex: 1,
    },
    buttonStyle: {
        type: 'button',
        fontSize: '14px',
        fontWeight: '700',
        pl: '30px',
        pr: '30px',
        colors: 'secondaryWithBg',
        color: '#03103b',
    },
};

export default Newsletter;
