import type { Schema, Attribute } from '@strapi/strapi';

export interface RoomDescriptionsBathrooms extends Schema.Component {
  collectionName: 'components_room_descriptions_bathrooms';
  info: {
    displayName: 'bathrooms';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface RoomDescriptionsBedroom1 extends Schema.Component {
  collectionName: 'components_room_descriptions_bedroom_1s';
  info: {
    displayName: 'bedroom_1';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface RoomDescriptionsBedroom2 extends Schema.Component {
  collectionName: 'components_room_descriptions_bedroom_2s';
  info: {
    displayName: 'bedroom_2';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface RoomDescriptionsBedroom3 extends Schema.Component {
  collectionName: 'components_room_descriptions_bedroom_3s';
  info: {
    displayName: 'bedroom_3';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface RoomDescriptionsDiningRoom extends Schema.Component {
  collectionName: 'components_room_descriptions_dining_rooms';
  info: {
    displayName: 'dining_room';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface RoomDescriptionsFamilyRoom extends Schema.Component {
  collectionName: 'components_room_descriptions_family_rooms';
  info: {
    displayName: 'family_room';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface RoomDescriptionsKitchen extends Schema.Component {
  collectionName: 'components_room_descriptions_kitchens';
  info: {
    displayName: 'kitchen';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface RoomDescriptionsLivingRoom extends Schema.Component {
  collectionName: 'components_room_descriptions_living_rooms';
  info: {
    displayName: 'living_room';
  };
  attributes: {
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'room-descriptions.bathrooms': RoomDescriptionsBathrooms;
      'room-descriptions.bedroom-1': RoomDescriptionsBedroom1;
      'room-descriptions.bedroom-2': RoomDescriptionsBedroom2;
      'room-descriptions.bedroom-3': RoomDescriptionsBedroom3;
      'room-descriptions.dining-room': RoomDescriptionsDiningRoom;
      'room-descriptions.family-room': RoomDescriptionsFamilyRoom;
      'room-descriptions.kitchen': RoomDescriptionsKitchen;
      'room-descriptions.living-room': RoomDescriptionsLivingRoom;
    }
  }
}
