import * as cdk from 'aws-cdk-lib';
import { IamStack } from '../lib/iam-stack';
import { EcsStack } from '../lib/ecs-stack';
import { Regions } from '../lib/region-enum';

const app = new cdk.App();

new IamStack(app, 'IamStack', {
  env: { region: Regions.MUMBAI },
});

new EcsStack(app, 'EcsStack', {
  env: { region: Regions.OREGON },
});
