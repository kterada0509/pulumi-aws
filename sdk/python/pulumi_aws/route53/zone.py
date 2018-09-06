# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class Zone(pulumi.CustomResource):
    """
    Provides a Route53 Hosted Zone resource.
    """
    def __init__(__self__, __name__, __opts__=None, comment=None, delegation_set_id=None, force_destroy=None, name=None, tags=None, vpc_id=None, vpc_region=None):
        """Create a Zone resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        comment = 'Managed by Pulumi'
        if comment and not isinstance(comment, basestring):
            raise TypeError('Expected property comment to be a basestring')
        __self__.comment = comment
        """
        A comment for the hosted zone. Defaults to 'Managed by Terraform'.
        """
        __props__['comment'] = comment

        if delegation_set_id and not isinstance(delegation_set_id, basestring):
            raise TypeError('Expected property delegation_set_id to be a basestring')
        __self__.delegation_set_id = delegation_set_id
        """
        The ID of the reusable delegation set whose NS records you want to assign to the hosted zone.
        Conflicts w/ `vpc_id` as delegation sets can only be used for public zones.
        """
        __props__['delegationSetId'] = delegation_set_id

        if force_destroy and not isinstance(force_destroy, bool):
            raise TypeError('Expected property force_destroy to be a bool')
        __self__.force_destroy = force_destroy
        """
        Whether to destroy all records (possibly managed outside of Terraform)
        in the zone when destroying the zone.
        """
        __props__['forceDestroy'] = force_destroy

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        This is the name of the hosted zone.
        """
        __props__['name'] = name

        if tags and not isinstance(tags, dict):
            raise TypeError('Expected property tags to be a dict')
        __self__.tags = tags
        """
        A mapping of tags to assign to the zone.
        """
        __props__['tags'] = tags

        if vpc_id and not isinstance(vpc_id, basestring):
            raise TypeError('Expected property vpc_id to be a basestring')
        __self__.vpc_id = vpc_id
        """
        The VPC to associate with a private hosted zone. Specifying `vpc_id` will create a private hosted zone.
        Conflicts w/ `delegation_set_id` as delegation sets can only be used for public zones.
        """
        __props__['vpcId'] = vpc_id

        if vpc_region and not isinstance(vpc_region, basestring):
            raise TypeError('Expected property vpc_region to be a basestring')
        __self__.vpc_region = vpc_region
        """
        The VPC's region. Defaults to the region of the AWS provider.
        """
        __props__['vpcRegion'] = vpc_region

        __self__.name_servers = pulumi.runtime.UNKNOWN
        """
        A list of name servers in associated (or default) delegation set.
        Find more about delegation sets in [AWS docs](https://docs.aws.amazon.com/Route53/latest/APIReference/actions-on-reusable-delegation-sets.html).
        """
        __self__.zone_id = pulumi.runtime.UNKNOWN
        """
        The Hosted Zone ID. This can be referenced by zone records.
        """

        super(Zone, __self__).__init__(
            'aws:route53/zone:Zone',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'comment' in outs:
            self.comment = outs['comment']
        if 'delegationSetId' in outs:
            self.delegation_set_id = outs['delegationSetId']
        if 'forceDestroy' in outs:
            self.force_destroy = outs['forceDestroy']
        if 'name' in outs:
            self.name = outs['name']
        if 'nameServers' in outs:
            self.name_servers = outs['nameServers']
        if 'tags' in outs:
            self.tags = outs['tags']
        if 'vpcId' in outs:
            self.vpc_id = outs['vpcId']
        if 'vpcRegion' in outs:
            self.vpc_region = outs['vpcRegion']
        if 'zoneId' in outs:
            self.zone_id = outs['zoneId']
