export const onlyNumber = (text: string) => {
  return text.replace(/\D/g, "");
};

export const cpfMask = (cpfValue: string) => {
  let value = onlyNumber(cpfValue);

  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  return value;
};

export const cnpjMask = (cnpjValue: string) => {
  let value = onlyNumber(cnpjValue);

  value = value.replace(/^(\d{2})(\d)/, "$1.$2");
  value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
  value = value.replace(/(\d{4})(\d)/, "$1-$2");

  return value;
};

export const cepMask = (cepValue: string) => {
  let value = onlyNumber(cepValue);

  return value.replace(/^([\d]{2})*([\d]{3})-*([\d]{3})/, "$1$2-$3");
};

export const phoneMask = (phone: string) => {
  let value = onlyNumber(phone);

  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};

export const getLastFirstName = (name: string) => {
  let first = name.split(" ").shift();
  return {
    first: first,
    last: name.replace(String(first), "").trim(),
  };
};

export const getVersion = (version: string) => {
  const sptVersion = version.split("_");
  return {
    modelo: sptVersion[0],
    versao: sptVersion[1],
    serie: sptVersion[2],
    ano: sptVersion[3],
  };
};

export const getQueryParams = () => {
  return (typeof window !== "undefined" && window.location.search) || "";
};

export const replaceUrl = (url: string, queryParams: string, router: any) => {
  url = `${url}/${queryParams}`;
  if(url && router){
    router.replace(url, undefined, { shallow: true });
  }
};

export const slugify = (text: string) => {
  if(!text || text === undefined || text === ''){
    return ''
  }

  return text
    .toString()
    ?.normalize("NFKD")
    ?.toLowerCase()
    ?.trim()
    ?.replace(/\s+/g, "-")
    ?.replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
};

export const getPath = (router: any) => {
  const { asPath } = router;
  return asPath === "/" ? "home" : asPath;
};

export const removeFakeData = (obj: any) =>
  Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => !k.startsWith("fake_"))
  );

export const validateName = (name: string) => {
  let [first, ...rest] = name.split(" ");
  let last = rest.join(" ");
  return first.length > 2 && last.length > 2;
};

export const getRefQueryParam = (name: string) => {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

export const handleChangeSection = (path: string) => {
  document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
};

export const getPathName = () => {
  let path = document.location.pathname;
  let arrayPath: string[] = path.split("/");
  arrayPath.shift();
  return arrayPath;
};
