import { includeResponsive } from "@/utils/imagePrefixes";

const PREFIX = `${process.env.BASE_PREFIX}images/`;
const SECTION_PREFIX = "ConsumerType/";

export const consumerType = {
  potenciaSlide001: includeResponsive(`${SECTION_PREFIX}potencia-inigualavel`, "jpg", {
    prefix: PREFIX,
  }),
  potenciaSlide002: includeResponsive(`${SECTION_PREFIX}modo-sport`, "jpg", {
    prefix: PREFIX,
  }),
  potenciaSlide003: includeResponsive(
    `${SECTION_PREFIX}design-exclusivo-escorpiao`,
    "jpg",
    {
      prefix: PREFIX,
    }
  ),
};
