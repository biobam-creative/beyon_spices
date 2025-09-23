import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Card, CardContent, CardTitle } from "../components/SpiceCard";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.primary};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.secondary};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid ${(props) => props.theme.secondary}20;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid ${(props) => props.theme.secondary}20;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid ${(props) => props.theme.secondary}20;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.primary};
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const ContactInfo = styled.div`
  h3 {
    color: ${(props) => props.theme.primary};
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

const BusinessHours = styled.div`
  background: ${(props) => props.theme.light};
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid ${(props) => props.theme.primary};
  margin: 1.5rem 0;
`;

const NewsletterSignup = styled.div`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.primary}15,
    ${(props) => props.theme.accent}15
  );
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 2rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    spiceInterest: [],
    message: "",
    hearAboutUs: "",
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "newsletter") {
        setFormData({ ...formData, [name]: checked });
      } else {
        const spiceInterest = [...formData.spiceInterest];
        if (checked) {
          spiceInterest.push(value);
        } else {
          const index = spiceInterest.indexOf(value);
          if (index > -1) {
            spiceInterest.splice(index, 1);
          }
        }
        setFormData({ ...formData, spiceInterest });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      spiceInterest: [],
      message: "",
      hearAboutUs: "",
      newsletter: false,
    });
  };

  return (
    <Container>
      <Section>
        <SectionTitle>Connect with Beyno's African Spice Company</SectionTitle>

        <Card>
          <CardContent>
            <CardTitle>Ready to Transform Your Cooking?</CardTitle>
            <p>
              Contact us to learn more about our ethically sourced African
              spices and how we're supporting farming communities across Africa.
            </p>

            <ContactGrid>
              <div>
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label htmlFor="name">Name:</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="email">Email:</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="phone">Phone Number:</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="inquiryType">Inquiry Type:</Label>
                    <Select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="general">General Inquiry</option>
                      <option value="wholesale">Wholesale/Restaurant</option>
                      <option value="custom">Custom Blends</option>
                      <option value="classes">Cooking Classes</option>
                      <option value="press">Press/Media</option>
                    </Select>
                  </FormGroup>

                  <FormGroup>
                    <Label>Spice Interest:</Label>
                    <CheckboxGroup>
                      <Checkbox
                        type="checkbox"
                        id="ethiopian"
                        name="spiceInterest"
                        value="ethiopian"
                        onChange={handleChange}
                      />
                      <Label
                        htmlFor="ethiopian"
                        style={{ display: "inline", fontWeight: "normal" }}
                      >
                        Ethiopian Blends
                      </Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                      <Checkbox
                        type="checkbox"
                        id="westAfrican"
                        name="spiceInterest"
                        value="westAfrican"
                        onChange={handleChange}
                      />
                      <Label
                        htmlFor="westAfrican"
                        style={{ display: "inline", fontWeight: "normal" }}
                      >
                        West African
                      </Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                      <Checkbox
                        type="checkbox"
                        id="northAfrican"
                        name="spiceInterest"
                        value="northAfrican"
                        onChange={handleChange}
                      />
                      <Label
                        htmlFor="northAfrican"
                        style={{ display: "inline", fontWeight: "normal" }}
                      >
                        North African
                      </Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                      <Checkbox
                        type="checkbox"
                        id="eastAfrican"
                        name="spiceInterest"
                        value="eastAfrican"
                        onChange={handleChange}
                      />
                      <Label
                        htmlFor="eastAfrican"
                        style={{ display: "inline", fontWeight: "normal" }}
                      >
                        East African
                      </Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                      <Checkbox
                        type="checkbox"
                        id="individual"
                        name="spiceInterest"
                        value="individual"
                        onChange={handleChange}
                      />
                      <Label
                        htmlFor="individual"
                        style={{ display: "inline", fontWeight: "normal" }}
                      >
                        Individual Spices
                      </Label>
                    </CheckboxGroup>
                    <CheckboxGroup>
                      <Checkbox
                        type="checkbox"
                        id="custom"
                        name="spiceInterest"
                        value="custom"
                        onChange={handleChange}
                      />
                      <Label
                        htmlFor="custom"
                        style={{ display: "inline", fontWeight: "normal" }}
                      >
                        Custom Blends
                      </Label>
                    </CheckboxGroup>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="message">Message:</Label>
                    <TextArea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="hearAboutUs">
                      How did you hear about us?
                    </Label>
                    <Select
                      id="hearAboutUs"
                      name="hearAboutUs"
                      value={formData.hearAboutUs}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option value="social">Social Media</option>
                      <option value="friend">Friend Referral</option>
                      <option value="blog">Food Blog</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="search">Online Search</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormGroup>

                  <CheckboxGroup>
                    <Checkbox
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                    />
                    <Label
                      htmlFor="newsletter"
                      style={{ display: "inline", fontWeight: "normal" }}
                    >
                      Subscribe to newsletter? Yes, send me spice tips and
                      recipes
                    </Label>
                  </CheckboxGroup>

                  <Button type="submit" primary style={{ marginTop: "1rem" }}>
                    Send Message
                  </Button>
                </form>
              </div>

              <ContactInfo>
                <h3>Company Contact Information</h3>

                <p>
                  <strong>Head Office & Warehouse</strong>
                  <br />
                  Beyno's African Spice Company
                  <br />
                  Unit 22, Spice Trading Estate
                  <br />
                  London, E1 XXX
                  <br />
                  United Kingdom
                </p>

                <p>
                  <strong>Customer Service:</strong>
                  <br />
                  Phone: +44 (0) 20-XXXX-XXXX
                  <br />
                  WhatsApp: +44 (0) 7XXX-XXX-XXX
                  <br />
                  Email: hello@beynosafricanspices.co.uk
                  <br />
                  Orders: orders@beynosafricanspices.co.uk
                </p>

                <BusinessHours>
                  <h4>Business Hours:</h4>
                  <p>
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                    <br />
                    Online orders processed 24/7
                  </p>
                </BusinessHours>

                <div>
                  <h4>Wholesale & Restaurant Inquiries</h4>
                  <p>
                    <strong>For Restaurants & Retailers:</strong>
                    <br />
                    Wholesale Manager: wholesale@beynosafricanspices.co.uk
                    <br />
                    • Bulk Pricing Available
                    <br />
                    • Custom Blend Development
                    <br />
                    • Regular Supply Contracts
                    <br />• Marketing Support Materials
                  </p>
                </div>

                <div>
                  <h4>Public Transport:</h4>
                  <p>
                    Nearest Underground Station - [Station Name]
                    <br />
                    <strong>Delivery:</strong> UK-wide shipping available with
                    next-day options for London area
                  </p>
                </div>
              </ContactInfo>
            </ContactGrid>
          </CardContent>
        </Card>

        <NewsletterSignup>
          <h3>Join the Beyno's Spice Community</h3>
          <p>Subscribe to our newsletter for:</p>
          <ul
            style={{
              textAlign: "left",
              display: "inline-block",
              margin: "1rem 0",
            }}
          >
            <li>Weekly recipes featuring African spices</li>
            <li>Seasonal spice guides and cooking tips</li>
            <li>First access to new products</li>
            <li>Stories from our farmer partners</li>
            <li>Exclusive subscriber discounts</li>
          </ul>
          <div style={{ marginTop: "1rem" }}>
            <Input
              type="email"
              placeholder="Enter your email address"
              style={{ width: "300px", marginRight: "1rem" }}
            />
            <Button primary>Subscribe</Button>
          </div>
        </NewsletterSignup>

        <Card style={{ marginTop: "2rem" }}>
          <CardContent>
            <CardTitle>Follow Us on Social Media</CardTitle>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button>Facebook</Button>
              <Button>Instagram</Button>
              <Button>Twitter</Button>
              <Button>YouTube</Button>
              <Button>Pinterest</Button>
              <Button>TikTok</Button>
            </div>
          </CardContent>
        </Card>
      </Section>
    </Container>
  );
};

export default Contact;
