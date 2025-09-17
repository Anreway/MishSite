import { useMemo } from 'react';
import { useTranslation } from '../contexts/LanguageContext';

export const useTranslatedPageData = (pageType, originalData) => {
  const { t, language } = useTranslation();

  const translatedData = useMemo(() => {
    const translationKeys = {
      milk: 'milk',
      agro: 'agro', 
      meat: 'meat',
      grocery: 'grocery',
      about: 'about',
      cooperation: 'cooperation'
    };

    const key = translationKeys[pageType];
    if (!key) return originalData;

    const result = {
      textCard: {
        ...originalData.textCard,
        title: t(`${key}.title`),
        description: t(`${key}.description`),
        buttonText: t('common.submitRequest')
      },
      videoCard: originalData.videoCard,
      contactCard: {
        ...originalData.contactCard,
        title: t(`${key}.contactTitle`),
        subtitle: t(`${key}.contactSubtitle`),
        description: t(`${key}.contactDescription`),
        companyName: t('company.name'),
        companyDescription: t('company.inn'),
        companyInfo: {
          ...originalData.contactCard.companyInfo,
          fullName: t('company.name'),
          address: t('company.address')
        },
        contacts: {
          phones: [t('company.phone')],
          emails: [t('company.email')]
        }
      }
    };

    // Add categories if they exist
    if (originalData.milkCategories) {
      result.milkCategories = originalData.milkCategories.map((category, index) => {
        const categoryKeys = Object.keys(t(`${key}.categories`));
        const categoryKey = categoryKeys[index];
        if (categoryKey) {
          return {
            ...category,
            title: t(`${key}.categories.${categoryKey}.title`),
            tags: t(`${key}.categories.${categoryKey}.tags`)
          };
        }
        return category;
      });
    }

    // Add agro categories
    if (originalData.agroCategories) {
      result.agroCategories = originalData.agroCategories.map((category, index) => {
        const categoryKeys = Object.keys(t(`${key}.categories`));
        const categoryKey = categoryKeys[index];
        if (categoryKey) {
          return {
            ...category,
            title: t(`${key}.categories.${categoryKey}.title`),
            tags: t(`${key}.categories.${categoryKey}.tags`)
          };
        }
        return category;
      });
    }

    // Add meat categories
    if (originalData.meatCategories) {
      result.meatCategories = originalData.meatCategories.map((category, index) => {
        const categoryKeys = Object.keys(t(`${key}.categories`));
        const categoryKey = categoryKeys[index];
        if (categoryKey) {
          return {
            ...category,
            title: t(`${key}.categories.${categoryKey}.title`),
            tags: t(`${key}.categories.${categoryKey}.tags`)
          };
        }
        return category;
      });
    }

    // Add grocery categories
    if (originalData.groceryCategories) {
      result.groceryCategories = originalData.groceryCategories.map((category, index) => {
        const categoryKeys = Object.keys(t(`${key}.categories`));
        const categoryKey = categoryKeys[index];
        if (categoryKey) {
          return {
            ...category,
            title: t(`${key}.categories.${categoryKey}.title`),
            tags: t(`${key}.categories.${categoryKey}.tags`)
          };
        }
        return category;
      });
    }

    // Add text content for about/cooperation pages
    if (originalData.aboutContent) {
      try {
        const contentTranslations = t(`${key}.content`);
        if (originalData.aboutContent.sections) {
          result.aboutContent = {
            ...originalData.aboutContent,
            sections: originalData.aboutContent.sections.map((section, index) => {
              const contentKeys = Object.keys(contentTranslations);
              const contentKey = contentKeys[index];
              if (contentKey) {
                return {
                  ...section,
                  title: t(`${key}.content.${contentKey}.title`),
                  content: t(`${key}.content.${contentKey}.content`)
                };
              }
              return section;
            })
          };
        } else if (Array.isArray(originalData.aboutContent)) {
          result.aboutContent = originalData.aboutContent.map((section, index) => {
            const contentKeys = Object.keys(contentTranslations);
            const contentKey = contentKeys[index];
            if (contentKey) {
              return {
                ...section,
                title: t(`${key}.content.${contentKey}.title`),
                content: t(`${key}.content.${contentKey}.content`)
              };
            }
            return section;
          });
        }
      } catch (error) {
        console.warn(`Translation error for ${key}.content:`, error);
        result.aboutContent = originalData.aboutContent;
      }
    }

    if (originalData.cooperationContent) {
      try {
        const contentTranslations = t(`${key}.content`);
        if (originalData.cooperationContent.sections) {
          result.cooperationContent = {
            ...originalData.cooperationContent,
            sections: originalData.cooperationContent.sections.map((section, index) => {
              const contentKeys = Object.keys(contentTranslations);
              const contentKey = contentKeys[index];
              if (contentKey) {
                return {
                  ...section,
                  title: t(`${key}.content.${contentKey}.title`),
                  content: t(`${key}.content.${contentKey}.content`)
                };
              }
              return section;
            })
          };
        } else if (Array.isArray(originalData.cooperationContent)) {
          result.cooperationContent = originalData.cooperationContent.map((section, index) => {
            const contentKeys = Object.keys(contentTranslations);
            const contentKey = contentKeys[index];
            if (contentKey) {
              return {
                ...section,
                title: t(`${key}.content.${contentKey}.title`),
                content: t(`${key}.content.${contentKey}.content`)
              };
            }
            return section;
          });
        }
      } catch (error) {
        console.warn(`Translation error for ${key}.content:`, error);
        result.cooperationContent = originalData.cooperationContent;
      }
    }

    return result;
  }, [t, language, pageType, originalData]);

  return translatedData;
};
