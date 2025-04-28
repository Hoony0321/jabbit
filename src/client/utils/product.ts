import { ConsultingProductWithExpert } from '@/src/server/types/domains';

export const extractProductDetailData = (
  consultingProduct: ConsultingProductWithExpert,
) => {
  const productDetailData = {
    productTitle: consultingProduct.title,
    expertName: consultingProduct.experts.name,
    isVerified: consultingProduct.experts.is_verified,
    certifications: consultingProduct.experts.certificates,
    specialties: consultingProduct.experts.primary_fields,
    specialtyDetail: consultingProduct.detail_fields,
    activities: consultingProduct.experts.activities,
    targetDescription: consultingProduct.target_descriptions,
    productDescription: consultingProduct.product_description,
    experiences: consultingProduct.experts.experiences,
    yearsOfExperience: consultingProduct.experts.yearsOfExperience,
  };

  return productDetailData;
};

export const extractFloatingCardData = (
  consultingProduct: ConsultingProductWithExpert,
  handlePriceTagClick: (index: number) => void,
  selectedPriceTagIndex: number,
) => {
  const floatingCardData = {
    expertName: consultingProduct.experts.name,
    expertImage: consultingProduct.experts.profile_image_url,
    priceTags: consultingProduct.prices,
    handlePriceTagClick: handlePriceTagClick,
    selectedPriceTagIndex: selectedPriceTagIndex,
    googleFormUrl: consultingProduct.google_form_link,
  };

  return floatingCardData;
};
