import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vconversions', { schema: 'toptq_dev' })
export class Vconversions {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('timestamp', {
    name: 'Postback_Timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  postbackTimestamp: Date;

  @Column('timestamp', {
    name: 'Visit_Timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  visitTimestamp: Date;


  @Column('varchar', { name: 'External_ID', nullable: true, length: 255 })
  externalId: string | null;

  @Column('varchar', { name: 'Click_ID', length: 255 })
  clickId: string;

  @Column('varchar', { name: 'Transaction_ID', nullable: true, length: 255 })
  transactionId: string | null;

  @Column('decimal', {
    name: 'Revenue',
    nullable: true,
    precision: 6,
    scale: 2,
  })
  revenue: string | null;

  @Column('decimal', {
    name: 'Revenue_amount_in_original_currency',
    nullable: true,
    precision: 6,
    scale: 2,
  })
  revenueAmountInOriginalCurrency: string | null;

  @Column('varchar', {
    name: 'Conversion_original_currency',
    nullable: true,
    length: 255,
  })
  conversionOriginalCurrency: string | null;

  @Column('decimal', { name: 'Cost', nullable: true, precision: 6, scale: 2 })
  cost: string | null;

  @Column('varchar', {
    name: 'Conversion_Type',
    nullable: true,
    length: 255,
    default: 'Unknown',
  })
  conversionType: string | null;

  @Column('varchar', {
    name: 'Outgoing_Postback_URL',
    nullable: true,
    length: 255,
  })
  outgoingPostbackUrl: string | null;

  @Column('varchar', { name: 'Creative_ID', nullable: true, length: 255 })
  creativeId: string | null;

  @Column('varchar', { name: 'Campaign_ID', nullable: true, length: 255 })
  campaignId: string | null;

  @Column('varchar', { name: 'Campaign', nullable: true, length: 255 })
  campaign: string | null;

  @Column('varchar', { name: 'Lander', nullable: true, length: 255 })
  lander: string | null;

  @Column('varchar', { name: 'Lander_ID', nullable: true, length: 255 })
  landerId: string | null;

  @Column('varchar', { name: 'Offer', nullable: true, length: 255 })
  offer: string | null;

  @Column('varchar', { name: 'Offer_ID', nullable: true, length: 255 })
  offerId: string | null;

  @Column('varchar', { name: 'Country', nullable: true, length: 255 })
  country: string | null;

  @Column('varchar', { name: 'Country_Code', nullable: true, length: 255 })
  countryCode: string | null;

  @Column('varchar', { name: 'Region', nullable: true, length: 255 })
  region: string | null;

  @Column('varchar', { name: 'City', nullable: true, length: 255 })
  city: string | null;

  @Column('varchar', { name: 'Path_ID', nullable: true, length: 255 })
  pathId: string | null;

  @Column('varchar', { name: 'User_Agent', nullable: true, length: 255 })
  userAgent: string | null;

  @Column('varchar', {
    name: 'Traffic_Source_Name',
    nullable: true,
    length: 255,
  })
  trafficSourceName: string | null;

  @Column('varchar', { name: 'Traffic_Source_ID', nullable: true, length: 255 })
  trafficSourceId: string | null;

  @Column('varchar', { name: 'Affiliate_Network', nullable: true, length: 255 })
  affiliateNetwork: string | null;

  @Column('varchar', {
    name: 'Affiliate_Network_ID',
    nullable: true,
    length: 255,
  })
  affiliateNetworkId: string | null;

  @Column('varchar', { name: 'Device', nullable: true, length: 255 })
  device: string | null;

  @Column('varchar', { name: 'OS', nullable: true, length: 255 })
  os: string | null;

  @Column('varchar', { name: 'OS_Version', nullable: true, length: 255 })
  osVersion: string | null;

  @Column('varchar', { name: 'Brand', nullable: true, length: 255 })
  brand: string | null;

  @Column('varchar', { name: 'Model', nullable: true, length: 255 })
  model: string | null;

  @Column('varchar', { name: 'Browser', nullable: true, length: 255 })
  browser: string | null;

  @Column('varchar', { name: 'Browser_Version', nullable: true, length: 255 })
  browserVersion: string | null;

  @Column('varchar', { name: 'Isp', nullable: true, length: 255 })
  isp: string | null;

  @Column('varchar', { name: 'Mobile_Carrier', nullable: true, length: 255 })
  mobileCarrier: string | null;

  @Column('varchar', { name: 'Connection_Type', nullable: true, length: 255 })
  connectionType: string | null;

  @Column('varchar', { name: 'IP', nullable: true, length: 255 })
  ip: string | null;

  @Column('varchar', { name: 'Referrer', nullable: true, length: 1023 })
  referrer: string | null;

  @Column('varchar', { name: 'Custom_Variable_1', nullable: true, length: 255 })
  customVariable_1: string | null;

  @Column('varchar', { name: 'Custom_Variable_2', nullable: true, length: 255 })
  customVariable_2: string | null;

  @Column('varchar', { name: 'Custom_Variable_3', nullable: true, length: 255 })
  customVariable_3: string | null;

  @Column('varchar', { name: 'Custom_Variable_4', nullable: true, length: 255 })
  customVariable_4: string | null;

  @Column('varchar', { name: 'Custom_Variable_5', nullable: true, length: 255 })
  customVariable_5: string | null;

  @Column('varchar', { name: 'Custom_Variable_6', nullable: true, length: 255 })
  customVariable_6: string | null;

  @Column('varchar', { name: 'Custom_Variable_7', nullable: true, length: 255 })
  customVariable_7: string | null;

  @Column('varchar', { name: 'Custom_Variable_8', nullable: true, length: 255 })
  customVariable_8: string | null;

  @Column('varchar', { name: 'Custom_Variable_9', nullable: true, length: 255 })
  customVariable_9: string | null;

  @Column('varchar', {
    name: 'Custom_Variable_10',
    nullable: true,
    length: 255,
  })
  customVariable_10: string | null;

  @Column('varchar', { name: 'Postback_param_1', nullable: true, length: 255 })
  postbackParam_1: string | null;

  @Column('varchar', { name: 'Postback_param_2', nullable: true, length: 255 })
  postbackParam_2: string | null;

  @Column('varchar', { name: 'Postback_param_3', nullable: true, length: 255 })
  postbackParam_3: string | null;

  @Column('varchar', { name: 'Postback_param_4', nullable: true, length: 255 })
  postbackParam_4: string | null;

  @Column('varchar', { name: 'Postback_param_5', nullable: true, length: 255 })
  postbackParam_5: string | null;
}
