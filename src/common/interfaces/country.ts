/**
 * Invoice Ninja (https://invoiceninja.com).
 *
 * @copyright Copyright (c) 2021. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @copyright Copyright (c) 2021. Invoice Ninja LLC (https://invoiceninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

export interface Country {
  id: string;
  capital: string;
  citizenship: string;
  country_code: string;
  currency: string;
  currency_code: string;
  currency_sub_unit: string;
  full_name: string;
  iso_3166_2: string;
  iso_3166_3: string;
  name: string;
  region_code: string;
  sub_region_code: string;
  eea: boolean;
  swap_postal_code: boolean;
  swap_currency_symbol: boolean;
  thousand_separator: string;
  decimal_separator: string;
}
