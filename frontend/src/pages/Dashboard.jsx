import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  Button,
  ButtonGroup,
  Divider,
  Image,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Skeleton } from "@chakra-ui/react";
import mob5 from "../Pics/mob5.jpg";
import mob4 from "../Pics/mob4.jpg";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const handleBuyNow = () => {
    console.log("Buy Now clicked");
  };

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        sm: "1fr",
        md: "1fr 1fr",
        lg: "1fr 1fr 1fr 1fr",
      }}
      gap={4}
    >
      {/* Skeleton loading */}
      {loading && (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      )}

      {!loading && (
        <>
          <Card maxW="sm">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000} // Adjust autoplay speed as needed (in milliseconds)
              pauseOnHover={true} // Pause autoplay when hovering over the slider
            >
              <Image
                src={mob5}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Image
                src={mob4}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              {/* Add more images within the Slider component */}
            </Slider>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">Vivo Y56c 5g SmartPhone</Heading>
                <Text>
                  The Vivo Y56 is a budget-friendly smartphone featuring a sleek
                  design and a vibrant display, ideal for multimedia consumption
                  and everyday tasks. With its reliable performance and
                  long-lasting battery, it offers a seamless user experience.
                  The device also boasts a capable camera setup, allowing users
                  to capture memorable moments with clarity and detail.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  Lost Item
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={handleBuyNow}
                >
                  Claim Now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  See More Info
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW="sm">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000} // Adjust autoplay speed as needed (in milliseconds)
              pauseOnHover={true} // Pause autoplay when hovering over the slider
            >
              <Image
                src={mob5}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Image
                src={mob4}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              {/* Add more images within the Slider component */}
            </Slider>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">Vivo Y56c 5g SmartPhone</Heading>
                <Text>
                  The Vivo Y56 is a budget-friendly smartphone featuring a sleek
                  design and a vibrant display, ideal for multimedia consumption
                  and everyday tasks. With its reliable performance and
                  long-lasting battery, it offers a seamless user experience.
                  The device also boasts a capable camera setup, allowing users
                  to capture memorable moments with clarity and detail.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  Lost Item
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={handleBuyNow}
                >
                  Claim Now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  See More Info
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW="sm">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000} // Adjust autoplay speed as needed (in milliseconds)
              pauseOnHover={true} // Pause autoplay when hovering over the slider
            >
              <Image
                src={mob5}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Image
                src={mob4}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              {/* Add more images within the Slider component */}
            </Slider>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">Vivo Y56c 5g SmartPhone</Heading>
                <Text>
                  The Vivo Y56 is a budget-friendly smartphone featuring a sleek
                  design and a vibrant display, ideal for multimedia consumption
                  and everyday tasks. With its reliable performance and
                  long-lasting battery, it offers a seamless user experience.
                  The device also boasts a capable camera setup, allowing users
                  to capture memorable moments with clarity and detail.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  Lost Item
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={handleBuyNow}
                >
                  Claim Now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  See More Info
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>

          <Card maxW="sm">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000} // Adjust autoplay speed as needed (in milliseconds)
              pauseOnHover={true} // Pause autoplay when hovering over the slider
            >
              <Image
                src={mob5}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Image
                src={mob4}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              {/* Add more images within the Slider component */}
            </Slider>
            <CardBody>
              <Stack mt="6" spacing="3">
                <Heading size="md">Vivo Y56c 5g SmartPhone</Heading>
                <Text>
                  The Vivo Y56 is a budget-friendly smartphone featuring a sleek
                  design and a vibrant display, ideal for multimedia consumption
                  and everyday tasks. With its reliable performance and
                  long-lasting battery, it offers a seamless user experience.
                  The device also boasts a capable camera setup, allowing users
                  to capture memorable moments with clarity and detail.
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  Lost Item
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  onClick={handleBuyNow}
                >
                  Claim Now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  See More Info
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
          

          
          {/* Repeat the Card block above for other cards */}
        </>
      )}
    </Grid>
  );
};

export default Dashboard;
