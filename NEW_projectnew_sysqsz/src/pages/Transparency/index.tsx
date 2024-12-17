import React from 'react';
import { SpendingChartWithData } from './SpendingChartWithData';
import { DataIntegrationTemplate } from './DataIntegrationTemplate';
import { TaxCollection } from './TaxCollection';
import { TaxRedemption } from './TaxRedemption';
import { News } from './News';
import { ItemBuyingTax } from './ItemBuyingTax';

const Transparency = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Transparency</h1>
      <SpendingChartWithData />
      <DataIntegrationTemplate onAddSpendingData={(data) => console.log(data)} />
      <TaxCollection />
      <TaxRedemption />
      <News />
      <ItemBuyingTax />
    </div>
  );
};

export default Transparency;
