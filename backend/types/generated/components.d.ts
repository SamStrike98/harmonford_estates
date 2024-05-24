import type { Schema, Attribute } from '@strapi/strapi';

export interface RoomDescriptionsBathrooms extends Schema.Component {
  collectionName: 'components_room_descriptions_bathrooms';
  info: {
    displayName: 'bathrooms';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Bathrooms'>;
  };
}

export interface RoomDescriptionsBedroom1 extends Schema.Component {
  collectionName: 'components_room_descriptions_bedroom_1s';
  info: {
    displayName: 'bedroom_1';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Bedroom 1'>;
  };
}

export interface RoomDescriptionsBedroom2 extends Schema.Component {
  collectionName: 'components_room_descriptions_bedroom_2s';
  info: {
    displayName: 'bedroom_2';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Bedroom 2'>;
  };
}

export interface RoomDescriptionsBedroom3 extends Schema.Component {
  collectionName: 'components_room_descriptions_bedroom_3s';
  info: {
    displayName: 'bedroom_3';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Bedroom 3'>;
  };
}

export interface RoomDescriptionsBedroom4 extends Schema.Component {
  collectionName: 'components_room_descriptions_bedroom_4s';
  info: {
    displayName: 'Bedroom_4';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Bedroom 4'>;
    description: Attribute.Text;
  };
}

export interface RoomDescriptionsBedroom5 extends Schema.Component {
  collectionName: 'components_room_descriptions_bedroom_5s';
  info: {
    displayName: 'Bedroom_5';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Bedroom 5'>;
    description: Attribute.Text;
  };
}

export interface RoomDescriptionsDiningRoom extends Schema.Component {
  collectionName: 'components_room_descriptions_dining_rooms';
  info: {
    displayName: 'dining_room';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Dining Room'>;
  };
}

export interface RoomDescriptionsFamilyRoom extends Schema.Component {
  collectionName: 'components_room_descriptions_family_rooms';
  info: {
    displayName: 'family_room';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Family Room'>;
  };
}

export interface RoomDescriptionsKitchen extends Schema.Component {
  collectionName: 'components_room_descriptions_kitchens';
  info: {
    displayName: 'kitchen';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Kitchen'>;
  };
}

export interface RoomDescriptionsLivingRoom extends Schema.Component {
  collectionName: 'components_room_descriptions_living_rooms';
  info: {
    displayName: 'living_room';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'room-descriptions.bathrooms': RoomDescriptionsBathrooms;
      'room-descriptions.bedroom-1': RoomDescriptionsBedroom1;
      'room-descriptions.bedroom-2': RoomDescriptionsBedroom2;
      'room-descriptions.bedroom-3': RoomDescriptionsBedroom3;
      'room-descriptions.bedroom-4': RoomDescriptionsBedroom4;
      'room-descriptions.bedroom-5': RoomDescriptionsBedroom5;
      'room-descriptions.dining-room': RoomDescriptionsDiningRoom;
      'room-descriptions.family-room': RoomDescriptionsFamilyRoom;
      'room-descriptions.kitchen': RoomDescriptionsKitchen;
      'room-descriptions.living-room': RoomDescriptionsLivingRoom;
    }
  }
}
