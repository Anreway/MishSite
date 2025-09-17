import { useMemo } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { cardData } from '../data/cardData';

export const useTranslatedCardData = () => {
  const { t, language } = useTranslation();

  const translatedCardData = useMemo(() => {
    return {
      textCard: {
        ...cardData.textCard,
        title: t('home.mainTitle'),
        description: t('home.mainDescription'),
        buttonText: t('common.submitRequest')
      },
      videoCard: cardData.videoCard,
      buttonCards: [
        {
          ...cardData.buttonCards[0],
          title: t('home.aboutCompany')
        },
        {
          ...cardData.buttonCards[1],
          title: t('home.cooperation')
        }
      ],
      flowingMenuItems: [
        {
          ...cardData.flowingMenuItems[0],
          text: t('home.flowingMenu.dairy')
        },
        {
          ...cardData.flowingMenuItems[1],
          text: t('home.flowingMenu.agro')
        },
        {
          ...cardData.flowingMenuItems[2],
          text: t('home.flowingMenu.meat')
        },
        {
          ...cardData.flowingMenuItems[3],
          text: t('home.flowingMenu.grocery')
        }
      ],
      advantageCards: [
        {
          ...cardData.advantageCards[0],
          title: t('home.advantages.quality.title'),
          description: t('home.advantages.quality.description')
        },
        {
          ...cardData.advantageCards[1],
          title: t('home.advantages.supply.title'),
          description: t('home.advantages.supply.description')
        },
        {
          ...cardData.advantageCards[2],
          title: t('home.advantages.assortment.title'),
          description: t('home.advantages.assortment.description')
        },
        {
          ...cardData.advantageCards[3],
          title: t('home.advantages.flexibility.title'),
          description: t('home.advantages.flexibility.description')
        }
      ],
      contactCard: {
        ...cardData.contactCard,
        title: t('contact.title'),
        subtitle: t('contact.subtitle'),
        description: t('contact.description'),
        companyName: t('company.name'),
        companyDescription: t('company.inn'),
        companyInfo: {
          ...cardData.contactCard.companyInfo,
          fullName: t('company.name'),
          address: t('company.address')
        },
        contacts: {
          phones: [t('company.phone')],
          emails: [t('company.email')]
        }
      }
    };
  }, [t, language]);

  return translatedCardData;
};
