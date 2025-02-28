export const extractProductDetailData = (productData: any) => {
  const productDetailData = {
    productTitle: productData.data.name,
    expertName: productData.data.expert.name,
    isVerified: productData.data.expert.isVerified,
    certifications: productData.data.expert.certificates,
    specialties: productData.data.expert.specialties,
    specialtyDetail: productData.data.detailFields,
    activities: productData.data.expert.activities,
    targetDescription: productData.data.targetDescription,
    productDescription: productData.data.productDescription,
    experiences: productData.data.expert.experiences,
    yearsOfExperience: productData.data.expert.yearsOfExperience,
  };

  return productDetailData;
};

export const extractFloatingCardData = (
  productData: any,
  handlePriceTagClick: (index: number) => void,
  selectedPriceTagIndex: number,
) => {
  const floatingCardData = {
    expertName: productData.data.expert.name,
    expertImage: productData.data.expert.profileImageUrl,
    priceTags: productData.data.priceInfos,
    handlePriceTagClick: handlePriceTagClick,
    selectedPriceTagIndex: selectedPriceTagIndex,
    googleFormUrl: productData.data.googleFormUrl,
  };

  return floatingCardData;
};
