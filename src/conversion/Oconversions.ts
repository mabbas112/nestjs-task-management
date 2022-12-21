import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


// , { schema: process.env.DATABASE_SCHEMA }
@Entity('oconversions')
export class Oconversions {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number & { __brand: 'oconversionsId' };

  @Column('tinytext', { name: 'CampaignID', nullable: true })
  campaignId: string | null;

  @Column('tinytext', { name: 'EventTypeclick', nullable: true })
  eventTypeclick: string | null;

  @Column('tinytext', { name: 'TrafficSourceID', nullable: true })
  trafficSourceId: string | null;

  @Column('tinytext', { name: 'FlowID', nullable: true })
  flowId: string | null;

  @Column('decimal', {
    name: 'IsFiltered',
    nullable: true,
    precision: 6,
    scale: 0,
  })
  isFiltered: string | null;

  @Column('decimal', {
    name: 'BotScore',
    nullable: true,
    precision: 6,
    scale: 0,
  })
  botScore: string | null;

  @Column('decimal', {
    name: 'BotVerified',
    nullable: true,
    precision: 6,
    scale: 0,
  })
  botVerified: string | null;

  @Column('tinytext', { name: 'VisitID', nullable: true })
  visitId: string | null;

  @Column('datetime', { name: 'VisitTime', nullable: true })
  visitTime: Date | null;

  @Column('tinytext', { name: 'VisitorID', nullable: true })
  visitorId: string | null;

  @Column('tinytext', { name: 'ExternalID', nullable: true })
  externalId: string | null;

  @Column('tinytext', { name: 'ClickID', nullable: true })
  clickId: string | null;

  @Column('datetime', { name: 'ClickTime', nullable: true })
  clickTime: Date | null;

  @Column('tinytext', { name: 'ConversionTransaction', nullable: true })
  conversionTransaction: string | null;

  @Column('datetime', { name: 'ConversionDate', nullable: true })
  conversionDate: Date | null;

  @Column('decimal', {
    name: 'CustomConversionNumber',
    nullable: true,
    precision: 6,
    scale: 0,
  })
  customConversionNumber: string | null;

  @Column('decimal', {
    name: 'ConversionPayout',
    nullable: true,
    precision: 6,
    scale: 2,
  })
  conversionPayout: string | null;

  @Column('tinytext', { name: 'ConvertedClickID', nullable: true })
  convertedClickId: string | null;

  @Column('tinytext', { name: 'ConversionParameter1', nullable: true })
  conversionParameter1: string | null;

  @Column('tinytext', { name: 'ConversionParameter2', nullable: true })
  conversionParameter2: string | null;

  @Column('tinytext', { name: 'ConversionParameter3', nullable: true })
  conversionParameter3: string | null;

  @Column('tinytext', { name: 'ConversionParameter4', nullable: true })
  conversionParameter4: string | null;

  @Column('tinytext', { name: 'ConversionParameter5', nullable: true })
  conversionParameter5: string | null;

  @Column('tinytext', { name: 'ConversionParameter6', nullable: true })
  conversionParameter6: string | null;

  @Column('tinytext', { name: 'ConversionParameter7', nullable: true })
  conversionParameter7: string | null;

  @Column('tinytext', { name: 'ConversionParameter8', nullable: true })
  conversionParameter8: string | null;

  @Column('tinytext', { name: 'ConversionParameter9', nullable: true })
  conversionParameter9: string | null;

  @Column('tinytext', { name: 'ConversionParameter10', nullable: true })
  conversionParameter10: string | null;

  @Column('tinytext', { name: 'ConversionParameter11', nullable: true })
  conversionParameter11: string | null;

  @Column('tinytext', { name: 'ConversionParameter12', nullable: true })
  conversionParameter12: string | null;

  @Column('tinytext', { name: 'ConversionParameter13', nullable: true })
  conversionParameter13: string | null;

  @Column('tinytext', { name: 'ConversionParameter14', nullable: true })
  conversionParameter14: string | null;

  @Column('tinytext', { name: 'ConversionParameter15', nullable: true })
  conversionParameter15: string | null;

  @Column('tinytext', { name: 'ConversionParameter16', nullable: true })
  conversionParameter16: string | null;

  @Column('tinytext', { name: 'ConversionParameter17', nullable: true })
  conversionParameter17: string | null;

  @Column('tinytext', { name: 'ConversionParameter18', nullable: true })
  conversionParameter18: string | null;

  @Column('tinytext', { name: 'ConversionParameter19', nullable: true })
  conversionParameter19: string | null;

  @Column('tinytext', { name: 'ConversionParameter20', nullable: true })
  conversionParameter20: string | null;

  @Column('tinytext', { name: 'CustomConversion1', nullable: true })
  customConversion1: string | null;

  @Column('tinytext', { name: 'CustomConversion2', nullable: true })
  customConversion2: string | null;

  @Column('tinytext', { name: 'CustomConversion3', nullable: true })
  customConversion3: string | null;

  @Column('tinytext', { name: 'CustomConversion4', nullable: true })
  customConversion4: string | null;

  @Column('tinytext', { name: 'CustomConversion5', nullable: true })
  customConversion5: string | null;

  @Column('tinytext', { name: 'CustomConversion6', nullable: true })
  customConversion6: string | null;

  @Column('tinytext', { name: 'CustomConversion7', nullable: true })
  customConversion7: string | null;

  @Column('tinytext', { name: 'CustomConversion8', nullable: true })
  customConversion8: string | null;

  @Column('tinytext', { name: 'CustomConversion9', nullable: true })
  customConversion9: string | null;

  @Column('tinytext', { name: 'CustomConversion10', nullable: true })
  customConversion10: string | null;

  @Column('tinytext', { name: 'CustomConversion11', nullable: true })
  customConversion11: string | null;

  @Column('tinytext', { name: 'CustomConversion12', nullable: true })
  customConversion12: string | null;

  @Column('tinytext', { name: 'CustomConversion13', nullable: true })
  customConversion13: string | null;

  @Column('tinytext', { name: 'CustomConversion14', nullable: true })
  customConversion14: string | null;

  @Column('tinytext', { name: 'CustomConversion15', nullable: true })
  customConversion15: string | null;

  @Column('tinytext', { name: 'CustomConversion16', nullable: true })
  customConversion16: string | null;

  @Column('tinytext', { name: 'CustomConversion17', nullable: true })
  customConversion17: string | null;

  @Column('tinytext', { name: 'CustomConversion18', nullable: true })
  customConversion18: string | null;

  @Column('tinytext', { name: 'CustomConversion19', nullable: true })
  customConversion19: string | null;

  @Column('tinytext', { name: 'CustomConversion20', nullable: true })
  customConversion20: string | null;

  @Column('tinytext', { name: 'TrackingField1', nullable: true })
  trackingField1: string | null;

  @Column('tinytext', { name: 'TrackingField2', nullable: true })
  trackingField2: string | null;

  @Column('tinytext', { name: 'TrackingField3', nullable: true })
  trackingField3: string | null;

  @Column('tinytext', { name: 'TrackingField4', nullable: true })
  trackingField4: string | null;

  @Column('tinytext', { name: 'TrackingField5', nullable: true })
  trackingField5: string | null;

  @Column('tinytext', { name: 'TrackingField6', nullable: true })
  trackingField6: string | null;

  @Column('tinytext', { name: 'TrackingField7', nullable: true })
  trackingField7: string | null;

  @Column('tinytext', { name: 'TrackingField8', nullable: true })
  trackingField8: string | null;

  @Column('tinytext', { name: 'TrackingField9', nullable: true })
  trackingField9: string | null;

  @Column('tinytext', { name: 'TrackingField10', nullable: true })
  trackingField10: string | null;

  @Column('tinytext', { name: 'TrackingField11', nullable: true })
  trackingField11: string | null;

  @Column('tinytext', { name: 'TrackingField12', nullable: true })
  trackingField12: string | null;

  @Column('tinytext', { name: 'TrackingField13', nullable: true })
  trackingField13: string | null;

  @Column('tinytext', { name: 'TrackingField14', nullable: true })
  trackingField14: string | null;

  @Column('tinytext', { name: 'TrackingField15', nullable: true })
  trackingField15: string | null;

  @Column('tinytext', { name: 'TrackingField16', nullable: true })
  trackingField16: string | null;

  @Column('tinytext', { name: 'TrackingField17', nullable: true })
  trackingField17: string | null;

  @Column('tinytext', { name: 'TrackingField18', nullable: true })
  trackingField18: string | null;

  @Column('tinytext', { name: 'TrackingField19', nullable: true })
  trackingField19: string | null;

  @Column('tinytext', { name: 'TrackingField20', nullable: true })
  trackingField20: string | null;

  @Column('tinytext', { name: 'DeviceModel', nullable: true })
  deviceModel: string | null;

  @Column('tinytext', { name: 'DeviceTypedesktop_laptops', nullable: true })
  deviceTypedesktopLaptops: string | null;

  @Column('tinytext', { name: 'DeviceBrand', nullable: true })
  deviceBrand: string | null;

  @Column('text', { name: 'DeviceUserAgent', nullable: true })
  deviceUserAgent: string | null;

  @Column('tinytext', { name: 'LocationCountryName', nullable: true })
  locationCountryName: string | null;

  @Column('tinytext', { name: 'LocationRegion', nullable: true })
  locationRegion: string | null;

  @Column('tinytext', { name: 'LocationCity', nullable: true })
  locationCity: string | null;

  @Column('tinytext', { name: 'DeviceOS', nullable: true })
  deviceOs: string | null;

  @Column('tinytext', { name: 'DeviceBrowser', nullable: true })
  deviceBrowser: string | null;

  @Column('tinytext', { name: 'DeviceBrowserVersion', nullable: true })
  deviceBrowserVersion: string | null;

  @Column('text', { name: 'ConnectionReferrer', nullable: true })
  connectionReferrer: string | null;

  @Column('tinytext', { name: 'ConnectionReferrerDomain', nullable: true })
  connectionReferrerDomain: string | null;

  @Column('tinytext', { name: 'Connection', nullable: true })
  connection: string | null;

  @Column('tinytext', { name: 'ConnectionType', nullable: true })
  connectionType: string | null;

  @Column('tinytext', { name: 'ConnectionISP', nullable: true })
  connectionIsp: string | null;

  @Column('tinytext', { name: 'ConnectionIP', nullable: true })
  connectionIp: string | null;

  @Column('decimal', { name: 'Cost', nullable: true, precision: 6, scale: 0 })
  cost: string | null;

  @Column('tinytext', { name: 'CostCurrency', nullable: true })
  costCurrency: string | null;
}
