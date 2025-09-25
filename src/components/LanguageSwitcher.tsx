
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  const languages = [
    {
      code: 'en',
      name: t('language.en'),
      flag: 'https://flagcdn.com/w20/us.png',
      alt: 'US Flag'
    },
    {
      code: 'es',
      name: t('language.es'),
      flag: 'https://flagcdn.com/w20/mx.png',
      alt: 'Mexico Flag'
    }
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 hover:bg-gray-100"
          title={t('language.switchLanguage')}
        >
          <img 
            src={currentLanguage?.flag}
            width="20" 
            height="15" 
            alt={currentLanguage?.alt}
            className="rounded-sm"
          />
          <span className="hidden sm:inline">{currentLanguage?.name}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border shadow-lg">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code as 'en' | 'es')}
            className="flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
          >
            <img 
              src={lang.flag}
              width="20" 
              height="15" 
              alt={lang.alt}
              className="rounded-sm"
            />
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
