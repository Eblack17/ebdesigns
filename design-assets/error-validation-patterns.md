# EB Designs Portfolio - Error Handling & Validation Patterns

This document outlines the error handling and validation patterns for the EB Designs portfolio website. Consistent, user-friendly error handling and validation are essential for providing a positive user experience, especially in interactive elements like forms and dynamic content.

## Principles of Error Handling

Our approach to error handling is built on these core principles:

1. **Preventive**: Whenever possible, prevent errors before they occur
2. **Informative**: Clearly communicate what went wrong
3. **Actionable**: Provide clear guidance on how to fix the issue
4. **Contextual**: Display errors in close proximity to where they occurred
5. **Accessible**: Ensure error messages are accessible to all users
6. **Consistent**: Use consistent patterns throughout the application
7. **Forgiving**: Allow for recovery and maintain user input when errors occur

## Form Validation

### Validation Timing

Our form validation follows a multi-stage approach:

1. **Real-time validation**: For critical fields (email, password)
2. **On-blur validation**: When a field loses focus
3. **On-submit validation**: Final check before form submission

### Required Field Indicators

```tsx
// Example of a required field with label indicator
<FormControl isRequired>
  <FormLabel>
    Name
    <RequiredIndicator />
  </FormLabel>
  <Input name="name" />
  <FormErrorMessage>Name is required</FormErrorMessage>
</FormControl>
```

Where `RequiredIndicator` is a styled component:

```tsx
const RequiredIndicator = () => (
  <Text as="span" color="red.500" ml="1">
    *
  </Text>
);
```

### Validation States and Styling

| State | Visual Indicator | Example |
|-------|------------------|---------|
| Default | Regular border | Gray border (gray.200) |
| Focus | Highlighted border | Blue border (blue.500) |
| Valid | Success indicator | Green border (green.500) and/or checkmark |
| Invalid | Error indicator | Red border (red.500) and error message |
| Disabled | Muted appearance | Gray background, lower opacity |

Implementation in Chakra UI:

```tsx
// Form field with validation states
<FormControl 
  id="email" 
  isInvalid={errors.email} 
  isRequired
>
  <FormLabel>Email</FormLabel>
  <InputGroup>
    <Input
      type="email"
      name="email"
      value={email}
      onChange={handleChange}
      onBlur={handleBlur}
      borderColor={errors.email ? "red.500" : isValidEmail ? "green.500" : "gray.200"}
    />
    {isValidEmail && (
      <InputRightElement>
        <CheckIcon color="green.500" />
      </InputRightElement>
    )}
  </InputGroup>
  <FormErrorMessage>{errors.email}</FormErrorMessage>
</FormControl>
```

### Error Message Patterns

Error messages should be:

1. **Specific**: Explain exactly what is wrong
2. **Constructive**: Tell the user how to fix the problem
3. **Concise**: Keep messages brief and to the point
4. **Human**: Use natural language, not technical jargon
5. **Non-accusatory**: Avoid blaming the user

Example error messages:

| Field | Bad Message | Good Message |
|-------|-------------|--------------|
| Email | "Invalid email" | "Please enter a valid email address (e.g., name@example.com)" |
| Password | "Password error" | "Password must be at least 8 characters and include a number" |
| Date | "Invalid date" | "Please enter a date in MM/DD/YYYY format" |
| Empty field | "Field required" | "Please enter your phone number" |

### Form-Level Validation

For errors that apply to the entire form or multiple fields:

```tsx
// Form with form-level error message
<Box as="form" onSubmit={handleSubmit}>
  {formError && (
    <Alert status="error" mb="4" borderRadius="md">
      <AlertIcon />
      <AlertTitle mr={2}>Form Submission Error</AlertTitle>
      <AlertDescription>{formError}</AlertDescription>
    </Alert>
  )}
  
  {/* Form fields */}
  <FormControl id="name" mb="4">
    <FormLabel>Name</FormLabel>
    <Input name="name" value={name} onChange={handleChange} />
  </FormControl>
  
  {/* More form fields */}
  
  <Button type="submit" colorScheme="blue" mt="4">
    Submit
  </Button>
</Box>
```

## Implementation with Chakra UI and React Hook Form

### Basic Form Setup

```tsx
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // Form submission logic
  };

  return (
    <VStack as="form" spacing="4" align="stretch" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name} isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          {...register("name", {
            required: "Please enter your name",
            minLength: { value: 2, message: "Name must be at least 2 characters" },
          })}
        />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.email} isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          {...register("email", {
            required: "Please enter your email address",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.message} isRequired>
        <FormLabel>Message</FormLabel>
        <Input
          as="textarea"
          rows={5}
          {...register("message", {
            required: "Please enter your message",
            minLength: { value: 10, message: "Message must be at least 10 characters" },
          })}
        />
        <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
      </FormControl>

      <Button
        type="submit"
        colorScheme="blue"
        isLoading={isSubmitting}
        loadingText="Submitting"
      >
        Send Message
      </Button>
    </VStack>
  );
};
```

### Custom Validation Schema with Yup

For more complex validation, we can use Yup with React Hook Form:

```tsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup
    .string()
    .required("Please enter your name")
    .min(2, "Name must be at least 2 characters"),
  
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
  
  phone: yup
    .string()
    .matches(
      /^(\+\d{1,3})?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
      "Please enter a valid phone number"
    )
    .optional(),
  
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "Message must be at least 10 characters"),
  
  projectType: yup
    .string()
    .oneOf(
      ["web-design", "branding", "ui-ux", "other"],
      "Please select a valid project type"
    )
    .required("Please select a project type"),
});

type FormValues = yup.InferType<typeof schema>;

// Then use it in your form:
const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
  resolver: yupResolver(schema)
});
```

## Visual Design of Error States

### Color System for Error States

| State | Text Color | Border Color | Background Color |
|-------|------------|--------------|------------------|
| Error | red.600 | red.500 | red.50 (subtle) |
| Warning | orange.600 | orange.500 | orange.50 (subtle) |
| Success | green.600 | green.500 | green.50 (subtle) |
| Info | blue.600 | blue.500 | blue.50 (subtle) |

### Error Icons and Indicators

Use consistent iconography for error states:

- Error: `<WarningIcon />` or `<CloseIcon />`
- Warning: `<WarningIcon />`
- Success: `<CheckIcon />`
- Info: `<InfoIcon />`

Example implementation:

```tsx
<FormControl isInvalid={!!error}>
  <FormLabel>Email</FormLabel>
  <InputGroup>
    <Input {...inputProps} />
    <InputRightElement>
      {error ? (
        <WarningIcon color="red.500" />
      ) : isValid ? (
        <CheckIcon color="green.500" />
      ) : null}
    </InputRightElement>
  </InputGroup>
  <FormErrorMessage>
    <WarningIcon mr="2" />
    {error}
  </FormErrorMessage>
</FormControl>
```

### Error Animation

Subtle animations can help draw attention to errors:

```tsx
// Example of error animation using Framer Motion with Chakra UI
import { motion } from "framer-motion";

const MotionFormErrorMessage = motion(FormErrorMessage);

<MotionFormErrorMessage
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  {errorMessage}
</MotionFormErrorMessage>
```

## Form Submission Error Handling

### Network/Server Error States

Handle API and network errors gracefully:

```tsx
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }
      
      setSubmitSuccess(true);
      // Clear form
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (submitSuccess) {
    return (
      <Alert status="success" borderRadius="md">
        <AlertIcon />
        <Box>
          <AlertTitle>Message sent successfully!</AlertTitle>
          <AlertDescription>
            Thank you for contacting me. I'll get back to you soon.
          </AlertDescription>
        </Box>
      </Alert>
    );
  }
  
  return (
    <Box>
      {submitError && (
        <Alert status="error" mb="4" borderRadius="md">
          <AlertIcon />
          <Box>
            <AlertTitle>Submission Error</AlertTitle>
            <AlertDescription>{submitError}</AlertDescription>
          </Box>
          <CloseButton position="absolute" right="8px" top="8px" onClick={() => setSubmitError(null)} />
        </Alert>
      )}
      
      <Box as="form" onSubmit={handleSubmit}>
        {/* Form fields */}
        
        <Button
          type="submit"
          colorScheme="blue"
          isLoading={isSubmitting}
          loadingText="Sending..."
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};
```

### Submit Success States

After successful form submission:

```tsx
// Success message component
const SuccessMessage = () => (
  <Alert
    status="success"
    variant="subtle"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    borderRadius="md"
    p="6"
  >
    <AlertIcon boxSize="40px" mr={0} />
    <AlertTitle mt={4} mb={1} fontSize="lg">
      Message Sent Successfully!
    </AlertTitle>
    <AlertDescription maxWidth="sm">
      Thank you for reaching out. I'll respond to your message within 2 business days.
    </AlertDescription>
    <Button mt="4" colorScheme="green" onClick={onReset}>
      Send Another Message
    </Button>
  </Alert>
);
```

## Error Handling for Dynamic Content

### Loading States

Show appropriate loading states when fetching data:

```tsx
const ProjectsGrid = () => {
  const { data, error, isLoading } = useFetchProjects();
  
  if (isLoading) {
    return <LoadingState />;
  }
  
  if (error) {
    return <ErrorState error={error} />;
  }
  
  if (!data || data.length === 0) {
    return <EmptyState />;
  }
  
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
      {data.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </SimpleGrid>
  );
};

// Loading state component
const LoadingState = () => (
  <Center h="300px">
    <VStack spacing="4">
      <Spinner size="xl" color="blue.500" thickness="4px" />
      <Text color="gray.600">Loading projects...</Text>
    </VStack>
  </Center>
);

// Error state component
const ErrorState = ({ error }: { error: Error }) => (
  <Alert
    status="error"
    variant="subtle"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    h="300px"
    borderRadius="md"
  >
    <AlertIcon boxSize="40px" mr={0} />
    <AlertTitle mt={4} mb={1} fontSize="lg">
      Failed to load projects
    </AlertTitle>
    <AlertDescription maxWidth="sm">
      {error.message || "An unexpected error occurred. Please try again later."}
    </AlertDescription>
    <Button mt="4" colorScheme="red" onClick={() => window.location.reload()}>
      Try Again
    </Button>
  </Alert>
);

// Empty state component
const EmptyState = () => (
  <Center h="300px" border="1px dashed" borderColor="gray.200" borderRadius="md" p="6">
    <VStack>
      <Icon as={FaInbox} boxSize="12" color="gray.400" />
      <Text fontSize="lg" fontWeight="medium" color="gray.600">
        No projects found
      </Text>
      <Text color="gray.500">
        Check back soon for new portfolio projects.
      </Text>
    </VStack>
  </Center>
);
```

### Client-Side Error Boundaries

Implement React Error Boundaries to catch rendering errors:

```tsx
// ErrorBoundary.tsx
import { Component, ErrorInfo, ReactNode } from "react";
import { Box, Heading, Text, Button, VStack, Code } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to monitoring service
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <Box
          p="6"
          bg="red.50"
          border="1px solid"
          borderColor="red.200"
          borderRadius="md"
        >
          <VStack align="start" spacing="4">
            <Heading size="md" color="red.600">
              Something went wrong
            </Heading>
            <Text color="gray.700">
              There was a problem rendering this component.
            </Text>
            {this.state.error && (
              <Code p="2" borderRadius="md" bg="red.100" color="red.800" width="full">
                {this.state.error.toString()}
              </Code>
            )}
            <Button
              colorScheme="red"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </Button>
          </VStack>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

Usage:

```tsx
// In app or page component
<ErrorBoundary>
  <ProjectsSection />
</ErrorBoundary>
```

## Accessibility Considerations for Error States

### Proper ARIA Attributes

Ensure error states are accessible:

```tsx
<FormControl isInvalid={!!error} id="email">
  <FormLabel htmlFor="email">Email</FormLabel>
  <Input
    id="email"
    aria-describedby={error ? "email-error" : undefined}
    aria-invalid={!!error}
  />
  {error && (
    <FormErrorMessage id="email-error">{error}</FormErrorMessage>
  )}
</FormControl>
```

### Focus Management

Focus the first invalid field after form submission:

```tsx
const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  
  const errors = validateForm();
  
  if (Object.keys(errors).length > 0) {
    const firstErrorField = document.getElementById(Object.keys(errors)[0]);
    if (firstErrorField) {
      firstErrorField.focus();
    }
    return;
  }
  
  // Submit form
};
```

### Screen Reader Announcements for Dynamic Errors

Use live regions to announce errors to screen readers:

```tsx
const ContactForm = () => {
  const [formError, setFormError] = useState<string | null>(null);
  
  // Form handling logic
  
  return (
    <Box>
      {formError && (
        <Alert
          status="error"
          mb="4"
          aria-live="assertive"
          role="alert"
        >
          <AlertIcon />
          <AlertDescription>{formError}</AlertDescription>
        </Alert>
      )}
      
      {/* Form fields */}
    </Box>
  );
};
```

## Error Prevention Techniques

### Inline Validation and Hints

Provide guidance before errors occur:

```tsx
<FormControl id="password">
  <FormLabel>Password</FormLabel>
  <Input type="password" value={password} onChange={handleChange} />
  <FormHelperText>
    Password must be at least 8 characters and include a number and a special character.
  </FormHelperText>
  
  {/* Password strength indicator */}
  {password && (
    <Box mt="2">
      <Text fontSize="sm" mb="1">Password strength:</Text>
      <Progress
        value={calculatePasswordStrength(password)}
        colorScheme={passwordStrengthColor}
        size="sm"
        borderRadius="full"
      />
    </Box>
  )}
</FormControl>
```

### Input Formatting and Masks

For inputs with specific formats:

```tsx
// Phone number input with mask
import { PatternFormat } from "react-number-format";

<FormControl id="phone">
  <FormLabel>Phone Number</FormLabel>
  <PatternFormat
    customInput={Input}
    format="(###) ###-####"
    mask="_"
    onValueChange={values => setPhone(values.value)}
  />
</FormControl>
```

### Confirmation for Destructive Actions

```tsx
const DeleteButton = ({ itemName, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <Button colorScheme="red" onClick={() => setIsOpen(true)}>
        Delete
      </Button>
      
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => setIsOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete {itemName}
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? This action cannot be undone.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button 
                colorScheme="red" 
                onClick={() => {
                  onDelete();
                  setIsOpen(false);
                }} 
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
```

## Field-Specific Validation Patterns

### Email Validation

```tsx
const validateEmail = (email: string) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!email) {
    return "Email is required";
  }
  if (!regex.test(email)) {
    return "Please enter a valid email address";
  }
  return "";
};
```

### Password Validation

```tsx
const validatePassword = (password: string) => {
  if (!password) {
    return "Password is required";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }
  if (!/[0-9]/.test(password)) {
    return "Password must include at least one number";
  }
  if (!/[!@#$%^&*]/.test(password)) {
    return "Password must include at least one special character (!@#$%^&*)";
  }
  return "";
};
```

### URL Validation

```tsx
const validateUrl = (url: string) => {
  if (!url) return "";
  
  try {
    new URL(url);
    return "";
  } catch (e) {
    return "Please enter a valid URL (e.g., https://example.com)";
  }
};
```

## Testing Error Handling

### Error State Testing Checklist

- [ ] Test all validation rules for each form field
- [ ] Test form submission with valid and invalid data
- [ ] Test form submission with network/server errors
- [ ] Test error recovery paths
- [ ] Test error states with screen readers
- [ ] Test error states with keyboard navigation
- [ ] Test error states in different browsers and screen sizes

### Automated Testing Example

```tsx
// Using React Testing Library and Jest
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  test("shows validation errors when form is submitted with empty fields", async () => {
    render(<ContactForm />);
    
    // Submit the form without filling any fields
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    
    // Check for validation error messages
    expect(await screen.findByText(/please enter your name/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter your email address/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter your message/i)).toBeInTheDocument();
  });
  
  test("shows validation error for invalid email", async () => {
    render(<ContactForm />);
    
    // Enter invalid email
    await userEvent.type(screen.getByLabelText(/email/i), "invalid-email");
    fireEvent.blur(screen.getByLabelText(/email/i));
    
    // Check for email validation error
    expect(await screen.findByText(/please enter a valid email address/i)).toBeInTheDocument();
  });
  
  test("submits the form successfully with valid data", async () => {
    // Mock fetch for successful response
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    
    render(<ContactForm />);
    
    // Fill form with valid data
    await userEvent.type(screen.getByLabelText(/name/i), "John Doe");
    await userEvent.type(screen.getByLabelText(/email/i), "john@example.com");
    await userEvent.type(screen.getByLabelText(/message/i), "This is a test message");
    
    // Submit the form
    fireEvent.click(screen.getByRole("button", { name: /send message/i }));
    
    // Check for success message
    expect(await screen.findByText(/message sent successfully/i)).toBeInTheDocument();
  });
});
```

## Recovery Strategies

### Graceful Degradation

Ensure the application works even when some features fail:

```tsx
const ProjectsPage = () => {
  const { data, error, isLoading } = useFetchProjects();
  const [filters, setFilters] = useState({});
  
  // If filtering functionality fails, we can still show all projects
  const filterProjects = useCallback((projects) => {
    try {
      return applyFilters(projects, filters);
    } catch (e) {
      console.error("Filtering failed:", e);
      return projects; // Fall back to showing all projects
    }
  }, [filters]);
  
  if (isLoading) return <LoadingState />;
  
  // Show a partial UI even if there's an error
  if (error) {
    return (
      <Box>
        <ErrorState error={error} />
        
        {/* Still show featured projects if available from cache or static data */}
        {cachedFeaturedProjects && (
          <Box mt="8">
            <Heading size="md">Featured Projects</Heading>
            <ProjectsGrid projects={cachedFeaturedProjects} />
          </Box>
        )}
      </Box>
    );
  }
  
  const filteredProjects = filterProjects(data || []);
  
  return (
    <Box>
      <FiltersBar filters={filters} onChange={setFilters} />
      <ProjectsGrid projects={filteredProjects} />
    </Box>
  );
};
```

### Auto-Retry Mechanism

For transient network issues:

```tsx
const useFetchWithRetry = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    let isMounted = true;
    let retryCount = 0;
    const maxRetries = 3;
    
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        
        if (!response.ok) {
          throw new Error(json.message || "An error occurred");
        }
        
        if (isMounted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (retryCount < maxRetries) {
          retryCount++;
          // Exponential backoff
          const delay = 1000 * Math.pow(2, retryCount);
          console.log(`Retrying fetch (${retryCount}/${maxRetries}) in ${delay}ms`);
          
          setTimeout(fetchData, delay);
        } else if (isMounted) {
          setError(error);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    
    fetchData();
    
    return () => {
      isMounted = false;
    };
  }, [url]);
  
  return { data, error, isLoading };
};
```

### Offline Support & Data Persistence

```tsx
// Using browser storage to preserve form data
const ContactForm = () => {
  const [formData, setFormData] = useState(() => {
    // Retrieve data from localStorage on component mount
    const savedData = localStorage.getItem("contactFormData");
    return savedData ? JSON.parse(savedData) : {
      name: "",
      email: "",
      message: ""
    };
  });
  
  // Save form data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("contactFormData", JSON.stringify(formData));
  }, [formData]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await submitForm(formData);
      // Clear saved data on successful submission
      localStorage.removeItem("contactFormData");
      // Reset form or show success message
    } catch (error) {
      // Handle error but keep the form data saved
    }
  };
  
  return (
    <Box as="form" onSubmit={handleSubmit}>
      {/* Form fields */}
    </Box>
  );
};
```

## Error Handling Component Library

Consider creating a reusable error handling component library for consistency:

```tsx
// components/ErrorHandling/index.ts
export { default as ErrorAlert } from './ErrorAlert';
export { default as ErrorBoundary } from './ErrorBoundary';
export { default as FormErrorMessage } from './FormErrorMessage';
export { default as LoadingState } from './LoadingState';
export { default as EmptyState } from './EmptyState';
export { default as ErrorFallback } from './ErrorFallback';

// Usage
import { ErrorBoundary, ErrorFallback } from 'components/ErrorHandling';

<ErrorBoundary fallback={<ErrorFallback />}>
  <MyComponent />
</ErrorBoundary>
```

## Design System Integration

These error and validation patterns should be integrated into the design system for consistent implementation across the portfolio website. 