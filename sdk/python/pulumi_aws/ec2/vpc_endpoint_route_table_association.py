# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class VpcEndpointRouteTableAssociation(pulumi.CustomResource):
    """
    Provides a resource to create an association between a VPC endpoint and routing table.
    
    ~> **NOTE on VPC Endpoints and VPC Endpoint Route Table Associations:** Terraform provides
    both a standalone VPC Endpoint Route Table Association (an association between a VPC endpoint
    and a single `route_table_id`) and a VPC Endpoint resource with a `route_table_ids`
    attribute. Do not use the same route table ID in both a VPC Endpoint resource and a VPC Endpoint Route
    Table Association resource. Doing so will cause a conflict of associations and will overwrite the association.
    """
    def __init__(__self__, __name__, __opts__=None, route_table_id=None, vpc_endpoint_id=None):
        """Create a VpcEndpointRouteTableAssociation resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not route_table_id:
            raise TypeError('Missing required property route_table_id')
        elif not isinstance(route_table_id, basestring):
            raise TypeError('Expected property route_table_id to be a basestring')
        __self__.route_table_id = route_table_id
        """
        The ID of the routing table to be associated with the VPC endpoint.
        """
        __props__['routeTableId'] = route_table_id

        if not vpc_endpoint_id:
            raise TypeError('Missing required property vpc_endpoint_id')
        elif not isinstance(vpc_endpoint_id, basestring):
            raise TypeError('Expected property vpc_endpoint_id to be a basestring')
        __self__.vpc_endpoint_id = vpc_endpoint_id
        """
        The ID of the VPC endpoint with which the routing table will be associated.
        """
        __props__['vpcEndpointId'] = vpc_endpoint_id

        super(VpcEndpointRouteTableAssociation, __self__).__init__(
            'aws:ec2/vpcEndpointRouteTableAssociation:VpcEndpointRouteTableAssociation',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'routeTableId' in outs:
            self.route_table_id = outs['routeTableId']
        if 'vpcEndpointId' in outs:
            self.vpc_endpoint_id = outs['vpcEndpointId']
